const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const createLink = require('./utils/links.js');

const PORT = process.env.PORT ?? 3333;
const directoryName = process.argv[2] || '.';
const directoryPath = path.join(__dirname, directoryName);

const generateFileHtml = (url, data) => `
  <html>
    <head>
      <title>${url}</title>
    </head>
    <body>
      <a href="/">Voltar</a>
      <pre>${data}</pre>
    </body>
  </html>
`;

const generateDirectoryHtml = (directoryName, files) => `
  <html>
    <head>
      <title>Lista de Arquivos</title>
    </head>
    <body>
      <h1>Lista de Arquivos em ${directoryName}</h1>
      <ul>
        ${files.map(file => `<li>${createLink(file)}</li>`).join('')}
      </ul>
    </body>
  </html>
`;

const server = http.createServer(async (req, res) => {
  try {
    if (req.url !== '/') {
      const data = await fs.readFile(path.join(directoryPath, req.url), 'utf8');
      res.statusCode = 200;
      res.end(generateFileHtml(req.url, data));
    } else {
      const files = await fs.readdir(directoryPath);
      res.statusCode = 200;
      res.end(generateDirectoryHtml(directoryName, files));
    }
  } catch (err) {
    res.statusCode = err.code === 'ENOENT' ? 404 : 500;
    res.end(res.statusCode === 404 ? 'File not found' : 'Erro interno do servidor');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// comandos 
// npm start ../files
// npm run start:prod ../files
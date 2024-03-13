const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({path: `.env.${process.env.NODE_ENV}`});

// import {stringUtils} from "./utils/strings.js"

console.log(process.env.NODE_ENV);

const PORT = process.env.PORT ?? 3333;

const server = http.createServer((req, res) => {
  // Obtém o diretório a partir do segundo argumento da linha de comando
  const directoryName = process.argv[2] || '.';
  const directoryPath = path.join(__dirname, directoryName);

  // Usa a função readdir para obter a lista de arquivos e subdiretórios
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      res.end('Erro interno do servidor');
    } else {
      // Constrói a resposta HTML com a lista de arquivos e subdiretórios
      const html = `
        <html>
          <head>
            <title>Lista de Arquivos</title>
          </head>
          <body>
            <h1>Lista de Arquivos em ${directoryName}</h1>
            <ul>
              ${files.map(file => `<li>${file}</li>`).join('')}
            </ul>
          </body>
        </html>
      `;

      // Define os cabeçalhos da resposta
      res.writeHead(200, { 'Content-Type': 'text/html' });
      
      // Envia a resposta ao cliente
      res.end(html);
    }
  });
});

// Inicia o servidor na porta especificada
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// comando:  
// node index.js ./pasta/
// npm start ./pasta/
// npx nodemon index.js
// npm run start:prod
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const directoryArg = process.argv[2];
    const directoryPath = directoryArg ? path.resolve(process.cwd(), directoryArg) : null;

    if (!directoryPath || !fs.existsSync(directoryPath)) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Por favor, especifique um diretório válido.');
        return;
    }

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro interno no servidor.');
            return;
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h1>Arquivos e Subdiretórios</h1>');
        res.write('<ul>');

        files.forEach(file => {
            const filePath = path.join(directoryPath, file);
            const stats = fs.statSync(filePath);

            if (stats.isDirectory()) {
                res.write(`<li><strong>${file}/</strong></li>`);
            } else {
                res.write(`<li>${file}</li>`);
            }
        });

        res.write('</ul>');
        res.end();
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});

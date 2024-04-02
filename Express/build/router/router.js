"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Hello world!');
});
router.get('/hb1', (req, res) => {
    res.render('hb1', { layout: false, });
});
router.post('/', (req, res) => {
    res.send({ nome: 'Caio', id: 1 });
});
router.get('/bemvindo/:nome', (req, res) => {
    const { nome } = req.params;
    res.send(`Bem-vindo ${nome}`);
});
// Exercício 6 lorem
router.get('/lorem/:paragraphs', (req, res) => {
    const { paragraphs } = req.params;
    const loremIpsum = generateLoremIpsum(parseInt(paragraphs));
    res.send(loremIpsum);
});
function generateLoremIpsum(paragraphs) {
    const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    let loremIpsum = '';
    for (let i = 0; i < paragraphs; i++) {
        loremIpsum += `<p>${lorem}</p>`;
    }
    return loremIpsum;
}
exports.default = router;

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.get('/hb1', (req, res) => {
  res.render('hb1', {
    layout: false,
    mensagem: 'Olá, você está aprendendo Express + Handlebars!',
  });
});

router.get('/hb2', (req, res) => {
  res.render('hb2', {
    poweredByExpress: true,
    nome: 'Express',
    type: 'Frmework',
    layout: false,
  });
});

router.get('/hb3', (req, res) => {
  res.render('hb3', {
    uf: 'UFAM',
    profes: [
      { nome: 'David Fernandes', sala: 1238 },
      { nome: 'Horácio Fernandes', sala: 1233 },
      { nome: 'Edleno Moura', sala: 1236 },
      { nome: 'Elaine Harada', sala: 1231 },
    ],
    layout: false,
  });
});

router.get('/hb4',  (req, res) => {
  res.render('hb4', {
    profes: [
      { name: 'Express', type: 'Framework', poweredByNodejs: true },
      { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
      { name: 'React', type: 'Library', poweredByNodejs: true },
      { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
      { name: 'Django', type: 'Framework', poweredByNodejs: false },
      { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
      { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ],
    layout: false,
  });
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
  const loremIpsum: string = generateLoremIpsum(parseInt(paragraphs));
  res.send(loremIpsum);
});

function generateLoremIpsum(paragraphs: number): string {
  const lorem: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let loremIpsum: string = '';
  for (let i = 0; i < paragraphs; i++) {
    loremIpsum += `<p>${lorem}</p>`;
  }
  return loremIpsum;
}

export default router;

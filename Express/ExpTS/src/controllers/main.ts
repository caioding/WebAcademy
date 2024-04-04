import { Request, Response } from 'express';

const index = (req: Request, res: Response) => {
  res.send('hello world!');
};

const hb1 = (req: Request, res: Response) => {
  res.render('main/hb1', {
    layout: false,
    mensagem: 'Olá, você está aprendendo Express + Handlebars!',
  });
};

const hb2 = (req: Request, res: Response) => {
  res.render('main/hb2', {
    poweredByExpress: true,
    nome: 'Express',
    type: 'Frmework',
    layout: false,
  });
};

const hb3 = (req: Request, res: Response) => {
  res.render('main/hb3', {
    uf: 'UFAM',
    profes: [
      { nome: 'David Fernandes', sala: 1238 },
      { nome: 'Horácio Fernandes', sala: 1233 },
      { nome: 'Edleno Moura', sala: 1236 },
      { nome: 'Elaine Harada', sala: 1231 },
    ],
    layout: false,
  });
};

const hb4 = (req: Request, res: Response) => {
  res.render('main/hb4', {
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
};

const lorem = (req: Request, res: Response) => {
  const { paragraphs } = req.params;
  const numParagraphs = parseInt(paragraphs);

  if (isNaN(numParagraphs)) {
    res.status(400).send('Número inválido de parágrafos');
    return;
  }

  const loremIpsum: string = generateLoremIpsum(numParagraphs);
  res.send(loremIpsum);
};

function generateLoremIpsum(paragraphs: number): string {
  const lorem: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  let loremIpsum: string = '';
  for (let i = 0; i < paragraphs; i++) {
    loremIpsum += `<p>${lorem}</p>`;
  }
  return loremIpsum;
}


export default { index, hb1, hb2, hb3, hb4, lorem };
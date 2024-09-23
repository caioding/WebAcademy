const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'Os :insertx: aleatórios de Ronaldinho Gaúcho não param! :inserty:, o craque roubou a cena na semana de moda masculina em Paris, na França. O ex-jogador desfilou para o :insertz:, cruzando a passarela ao som de funk e usando uma camisa com seu próprio rosto estampado. Ronaldinho Gaúcho registrou o desfile em suas redes sociais.';
const insertX = ['rolês', 'encontros', 'eventos'];
const insertY = ['Neste sábado (20)', 'Neste domingo (7)', 'Nesta sexta (13)'];
const insertZ = ['KidSuper (o estilista Colm Dillane)', 'John Mayer (Músico)', 'Emmanuel Macron (Presidente da França)'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

    
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Ronaldinho Gaúcho', name);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
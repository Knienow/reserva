/*Por ainda confundir um pouco os conceitos do DOM, adotei a metodologia baby steps, 
para conseguir criar um código que fizesse sentido pra mim e cumprisse os requisitos. 
Como ferramenta para auxiliar na compreensão dos códigos, adicionei comentários de acordo
com o que julgava necessário mencionar.
Ainda, optei por revisar o conteúdo da plataforma da Trybe e ver tutoriais no Youtube e 
em sites e blogs.*/



/*Para uma consulta rápida, optei por criar uma legenda dos id's:
color-palette: paleta de cores;
button-random-color: botão 'cores aleatórias';
clear-board: botão que retorne a cor do quadro para a cor inicial;
board-size: input onde o usuário pode alterar o tamanho do quadro;
generate-board: botão que dispara o evento de criação do quadro com o novo tamanho;
pixel-board: o quadro de pixels;
clear-grid: retornar o quadro para o valor inicial.

e também uma legenda de classes:
color: os elementos da paleta de cores;
*/

//Passo 2: criei a função generateColor para gerar as cores randomicamente 
/*A função Math.random() retornará um float aletório de 0 a 1, que, multiplicado por 
255, limitará o resultado a 255 como valor máximo. O parâmetro opacity definirá qual 
a opacidade da cor, cujo valor 1 determina que não haverá opacidade. Ainda, 
para converter o valor de float para inteiro, foi aplicado o parseInt*/
function generateColor(opacity = 1) {
  let red = parseInt(Math.random() * 255);
  let green = parseInt(Math.random() * 255);
  let blue = parseInt(Math.random() * 255);
 
  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;

}

//evento de click do botão 'cores aleatórias

/*com a variável colorsOfPalette criada no arquivo js para capturar os elementos da 
classe '.color', coloquei o índice dos elementos e a respectiva alteração de suas propriedades
backgroundColor com as cores correspondentesm geradas através da função generateColor - 
com exceção do elemento na posição 0(zero), que deve ser preta.*/

/*para que o botão button-random-collor funcione plenamente, ele precisa de uma função que gere
 as cores aletórias (generateColor()) e de uma função que aloque as cores nos seus respectivos 
 elementos.*/

/*document.getElementById('button-random-color').addEventListener('click', () => {
  for(let index = 0; index < 4; index += 1){
    let color = generateColor();
    let paletteColors = document.getElementsById(`color-${index +1}`)
      paletteColors[0].style.backgroundColor = 'black';
      //a cor da paleta receberá a cor determinada na função generateColor(), através da variável 'color'.
      paletteColors.style.backgroundColor = color;  
  }
}); - acho que não vai precisar dessa função*/ 

//função para colorir o pixel com a cor escolhida  
function changeColorPencil() {
  //a cor inicial o pincel será preto 
  let pencil = colorsOfPalette[0]; 
  pencil.addEventListener('click', );
}

function paint() {
  pixelsOfBoard.style.backgroundColor = changeColorPencil();
}




/*let generatedGrid()  {
  loop encadeado  for dentro do for 
}*/

/*função para exibir um alert caso o valor atribuído ao input board-size seja 
igual a 0(zero) ou não tenha sido informado nenhum valor (campo vazio)*/
function alertOn() {
  if(userDefinedBoardSize.value === 0 || userDefinedBoardSize.value === ""){
    alert("Board inválido!");
  }
}



/*salvar no localStorage 
Nós não podemos salvar objetos diretamente na localStorage, pois é um serviço que é limitado a pares de chave e valor

Então o que pode ser feito para evitar esta limitação?

Podemos transformar o objeto em uma string e quando resgatar ele transformar em objeto novamente
Com a instrução JSON.stringify conseguimos transformar o objeto em uma string, sem perder a sua formatação, utilizamos o método setItem para salvar na localStorage

Depois para resgatar este valor vamos precisar do método getItem

E por fim para converter em objeto novamente a string utilizamos o JSON.parse

Veja que na última linha estamos utilizando novamente de forma normal o objeto com a sua propriedade nome
exemplo:
let pessoa = {nome: 'Matheus', idade: 29}

// Transformar o objeto em string e salvar em localStorage
localStorage.setItem('pessoa', JSON.stringify(pessoa));

// Receber a string
let pessoaString = localStorage.getItem('pessoa');

// transformar em objeto novamente
let pessoaObj = JSON.parse(pessoaString);

console.log(pessoaObj.nome); // Matheus

*/

document.addEventListener("DOMContentLoaded", function(e) {
  //referências iniciais, recuperando os elementos HTML com seletores DOM.
  const colorsPalette = document.getElementById('color-palette');
  const btnGeneratedRandomColors = document.getElementById('button-random-color');
  const btnClearBoard = document.getElementById('clear-board');
  const userDefinedBoardSize = document.getElementById('board-size');
  const btnGeneratedBoardSize = document.getElementById('generate-board');
  const board = document.getElementById('pixel-board');
  const btnClearGrid = document.getElementById('clear-grid');
  const colorsOfPalette = document.getElementsByClassName('color');
  const pixelsOfBoard = document.getElementsByClassName('pixel');

  document.getElementById('button-random-color').addEventListener('click', () => {
    for(let index = 0; index < 4; index += 1){
      colorsOfPalette[0].style.backgroundColor = 'black';
      colorsOfPalette[1].style.backgroundColor = generateColor(); 
      colorsOfPalette[2].style.backgroundColor = generateColor(); 
      colorsOfPalette[3].style.backgroundColor = generateColor(); 
    }
  });

  document.getElementsByClassName('pixel').addEventListener('click', paint());

  //função para limpar o quadro, preenchendo a cor de todos os pixels com branco
  document.getElementById('clear-board').addEventListener('click', () => {
    pixel.style.backgroundColor = 'white';
  });

});

window.onload = () => {
  generateColor();
};

/* Chama todas as funções ao realizar a atualização da página, 
armazenando as informações*/
let perguntas = 0;
let categoria = 0;
let dificuldade = '';

const categoriaDOM = document.querySelector('.categoria');
const perguntaDOM = document.querySelector('.pergunta');
const resposta1DOM = document.querySelector('.resposta1');
const resposta2DOM = document.querySelector('.resposta2');
const resposta3DOM = document.querySelector('.resposta3');
const resposta4DOM = document.querySelector('.resposta4');

document.getElementById('principal').style.display = '';
document.getElementById('jogo').style.display = 'none';

document.querySelector('.bt-play').addEventListener('click', function(){
    document.getElementById('principal').style.display = 'none';
    document.getElementById('jogo').style.display = '';
    selecionarCategoria();
    selecionarDificuldade();
    carregarPerguntas();
});

document.querySelector('.bt-next').addEventListener('click', function(){
    document.getElementById('id-card').className = 'card blue-grey darken-1';
    sortearPergunta();
});

document.querySelector('.bt-cancel').addEventListener('click', function(){
    window.location.reload(true); 
});

document.querySelector('.bt-select').addEventListener('click', function(){
  document.getElementById('id-card').className = 'card green darken-4';
});


function carregarPerguntas() {
    
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    axios.get(`${proxy}https://opentdb.com/api.php?amount=10&category=${categoria}&difficulty=${dificuldade}`)
    .then(function(json) {
    perguntas = json.data;
    
       sortearPergunta();
    })
    .catch(function(erro) {
      console.log(erro);
      //noticiasDOM.textContent = 'Deu ruim! Tente novamente!';
    });
};

function sortearPergunta() {
  console.log(perguntas.results);
  const n = Math.floor((Math.random() * 10) + 1);
  categoriaDOM.textContent = perguntas.results[n].category;
  perguntaDOM.textContent = perguntas.results[n].question;
  resposta1DOM.textContent = perguntas.results[n].correct_answer;
  resposta2DOM.textContent = perguntas.results[n].incorrect_answers[0];
  resposta3DOM.textContent = perguntas.results[n].incorrect_answers[1];
  resposta4DOM.textContent = perguntas.results[n].incorrect_answers[2];
}

function selecionarCategoria() {
  // const filtro = document.getElementById('id_filtro').value;

  if(document.getElementById('id-music').checked){
    categoria = 12;
  }
  if(document.getElementById('id-games').checked){
    categoria = 15;
  }
  if(document.getElementById('id-sports').checked){
    categoria = 21;
  }

  console.log(categoria);
}

function selecionarDificuldade() {
  if(document.getElementById('id-easy').checked){
    dificuldade = 'easy';
  }
  if(document.getElementById('id-medium').checked){
    dificuldade = 'medium';
  }
  if(document.getElementById('id-hard').checked){
    dificuldade = 'hard';
  }

  console.log(dificuldade);
}

function verificarResposta() {
  if(document.getElementById('id-easy').checked){
    dificuldade = 'easy';
  }
  if(document.getElementById('id-medium').checked){
    dificuldade = 'medium';
  }
  if(document.getElementById('id-hard').checked){
    dificuldade = 'hard';
  }

  console.log(dificuldade);
}
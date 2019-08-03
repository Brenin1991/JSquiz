let pontos = 0;
let dificuldade = '';
let categoria = 0;
let respondidas = 0;
let erros = 0;

let perguntas = 0;

let pontosDificuldade = 0;
let correta = '';

const categoriaDOM = document.querySelector('.categoria');
const perguntaDOM = document.querySelector('.pergunta');
const pontosDOM = document.querySelector('.pontos');

const resposta1DOM = document.querySelector('.resposta1');
const resposta2DOM = document.querySelector('.resposta2');
const resposta3DOM = document.querySelector('.resposta3');
const resposta4DOM = document.querySelector('.resposta4');
const r1DOM = document.getElementById('id-resposta1');
const r2DOM = document.getElementById('id-resposta2');
const r3DOM = document.getElementById('id-resposta3');
const r4DOM = document.getElementById('id-resposta4');

document.getElementById('principal').style.display = '';
document.getElementById('jogo').style.display = 'none';
document.getElementById('final').style.display = 'none';
document.querySelector('.bt-next').style.display = 'none';

document.querySelector('.bt-play').addEventListener('click', function(){
    document.getElementById('principal').style.display = 'none';
    document.getElementById('jogo').style.display = '';
    selecionarCategoria();
    selecionarDificuldade();
    carregarPerguntas();
});

document.querySelector('.bt-next').addEventListener('click', function(){
    document.getElementById('id-card').className = 'card blue-grey darken-1';
    document.querySelector('.bt-next').style.display = 'none';
    document.querySelector('.bt-select').style.display = '';
    sortearPergunta();
});

document.querySelector('.bt-cancel').addEventListener('click', function(){
    window.location.reload(true); 
});

document.querySelector('.bt-select').addEventListener('click', function(){
  document.querySelector('.bt-next').style.display = '';
  document.querySelector('.bt-select').style.display = 'none';
  verificarResposta();
  verificarErros();
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
  r1DOM.value = perguntas.results[n].correct_answer;
  resposta2DOM.textContent = perguntas.results[n].incorrect_answers[0];
  r2DOM.value = perguntas.results[n].incorrect_answers[0];
  resposta3DOM.textContent = perguntas.results[n].incorrect_answers[1];
  r3DOM.value = perguntas.results[n].incorrect_answers[2];
  resposta4DOM.textContent = perguntas.results[n].incorrect_answers[2];
  r4DOM.value = perguntas.results[n].incorrect_answers[3];
  correta = perguntas.results[n].correct_answer;
  console.log(correta);

}

function selecionarCategoria() {
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
    pontosDificuldade = 5;
  }
  if(document.getElementById('id-medium').checked){
    dificuldade = 'medium';
    pontosDificuldade = 8;
  }
  if(document.getElementById('id-hard').checked){
    dificuldade = 'hard';
    pontosDificuldade = 10;
  }
  console.log(dificuldade);
}

function atualizarScore() {
  pontosDOM.textContent = "Score: "+ pontos;
}

function verificarErros() {
  if(erros >= 3){
    document.getElementById('jogo').style.display = 'none';
    document.getElementById('final').style.display = '';
    verTabela();
    document.querySelector('.bt-reload').addEventListener('click', function(){
      window.location.reload(true); 
    });
  }
}

function verificarResposta() {
  respondidas += 1;
  console.log(respondidas);
  if(document.getElementById('id-resposta1').checked){
    if(document.getElementById('id-resposta1').value == correta){
      console.log('Acertou!!!');
      pontos = pontos + pontosDificuldade;
      document.getElementById('id-card').className = 'card green darken-4';
    }
    else{
      console.log('Errou!!!');
      erros += 1;
      pontos = pontos - pontosDificuldade;
      document.getElementById('id-card').className = 'card red darken-4';
    }
  }
  if(document.getElementById('id-resposta2').checked){
    if(document.getElementById('id-resposta2').value == correta){
      console.log('Acertou!!!');
      pontos = pontos + pontosDificuldade;
      document.getElementById('id-card').className = 'card green darken-4';
    }
    else{
      console.log('Errou!!!');
      erros += 1;
      pontos = pontos - pontosDificuldade;
      document.getElementById('id-card').className = 'card red darken-4';
    }
  }
  if(document.getElementById('id-resposta3').checked){
    if(document.getElementById('id-resposta3').value == correta){
      console.log('Acertou!!!');
      pontos = pontos + pontosDificuldade;
      document.getElementById('id-card').className = 'card green darken-4';
    }
    else{
      console.log('Errou!!!');
      erros += 1;
      pontos = pontos - pontosDificuldade;
      document.getElementById('id-card').className = 'card red darken-4';
    }
  }
  if(document.getElementById('id-resposta4').checked){
    if(document.getElementById('id-resposta4').value == correta){
      console.log('Acertou!!!');
      pontos = pontos + pontosDificuldade;
      document.getElementById('id-card').className = 'card green darken-4';
    }
    else{
      console.log('Errou!!!');
      erros += 1;
      pontos = pontos - pontosDificuldade;
      document.getElementById('id-card').className = 'card red darken-4';
    }
  }
  console.log(dificuldade);
  atualizarScore();
}

function verTabela(){
    var table = document.getElementById('id_table');

    //for (const celula of lista) {
        const tr = table.insertRow(-1);
        let td = tr.insertCell(0);
        let texto = document.createTextNode(pontos);
        td.appendChild(texto);
    
        td = tr.insertCell(1);
        texto = document.createTextNode(respondidas);
        td.appendChild(texto);
    
        td = tr.insertCell(2);
        texto = document.createTextNode(dificuldade);
        td.appendChild(texto);
    
        td = tr.insertCell(3);
        texto = document.createTextNode(categoria);
        td.appendChild(texto);
//
}

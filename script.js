
document.getElementById('principal').style.display = '';
document.getElementById('jogo').style.display = 'none';

document.querySelector('.bt-play').addEventListener('click', function(){
    document.getElementById('principal').style.display = 'none';
    document.getElementById('jogo').style.display = '';
    carregarPerguntas();
});

function carregarPerguntas(){
    const categoria = document.querySelector('.categoria');
    const pergunta = document.querySelector('.pergunta');
    const resposta1 = document.querySelector('.resposta1');
    const resposta2 = document.querySelector('.resposta2');
    const resposta3 = document.querySelector('.resposta3');
    const resposta4 = document.querySelector('.resposta4');

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    axios.get(`${proxy}https://opentdb.com/api.php?amount=10&category=21&difficulty=hard`)
    .then(function(json) {
    let perguntas = json.data.results;
    const n = Math.floor((Math.random() * 10) + 1);
       console.log(json.data.results);
       categoria.textContent = json.data.results[n].category;
       pergunta.textContent = json.data.results[n].question;
       resposta1.textContent = json.data.results[n].correct_answer;
       resposta2.textContent = json.data.results[n].incorrect_answers[0];
       resposta3.textContent = json.data.results[n].incorrect_answers[1];
       resposta4.textContent = json.data.results[n].incorrect_answers[2];
    })
    .catch(function(erro) {
      console.log(erro);
      //noticiasDOM.textContent = 'Deu ruim! Tente novamente!';
    });
};

function sortearPergunta(){

}
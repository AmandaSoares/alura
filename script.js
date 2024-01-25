// Pegar o nome e colocar saudação
const recebeNome = prompt('Olá, por favor me diga seu nome')
const nome = recebeNome

const horaAtual = new Date().getHours()
let saudacao;
    if (horaAtual < 12) {
        saudacao = 'Bom dia';
    } else if (horaAtual < 18) {
        saudacao = 'Boa tarde';
    } else {
        saudacao = 'Boa noite';
    }
const h1 = document.querySelector('.playlist__h1')
h1.textContent = `${saudacao}, ${nome}!`

// mudar a cor do coraçãozin
function changeColor() {
    const like = document.querySelector('.heart')
    like.style.color = '#70d412'
}

// tocar e pausar a música
function play() {
    const audio = document.getElementById("music")
    const pausar = document.querySelector('.fa-play')

    if (audio.paused) {
        audio.play();
        pausar.classList.remove('fa-play')
        pausar.classList.add('fa-pause');
    } else {
        audio.pause();
        pausar.classList.remove('fa-pause')
        pausar.classList.add('fa-play');
    }
}
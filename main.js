// var snd;

// function tocarPom(){
//     // alert('Hello, World!');
//     snd = new Audio("sounds/keyq.wav");
//     snd.play();
// }

// function tocarClap() {
//     snd = new Audio('sounds/keyw.wav');
//     snd.play();
// } [...]

function tocarSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null || elemento.localName != 'audio') {
        console.log('Elemento não encontrado')
    }

    if (elemento /*!= null*/ && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {

    const tecla = listaTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;
    // console.log(idAudio);

    tecla.onclick = function () {
        tocarSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        console.log(evento.code == 'Space');

        if (evento.code === 'Space' || evento.code === "Enter") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    // console.log(contador);
}

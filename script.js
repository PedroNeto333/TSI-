function mostrarGrade() {
    const lista = document.getElementById('lista-grade');
    const btn = document.getElementById('toggle-btn');
    
    if (lista.style.display === 'none' || lista.style.display === '') {
        lista.style.display = 'grid';
        btn.textContent = 'Ocultar Detalhes';
        lista.style.opacity = '0';
        setTimeout(() => {
            lista.style.transition = 'opacity 0.6s ease';
            lista.style.opacity = '1';
        }, 10);
    } else {
        lista.style.display = 'none';
        btn.textContent = 'Ver Grade Completa';
    }
}

function validarFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const overlay = document.getElementById('success-overlay');

    if (nome === '' || email === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    overlay.classList.add('active');
    event.target.reset();
}

function fecharSucesso() {
    const overlay = document.getElementById('success-overlay');
    overlay.classList.remove('active');
}

window.onscroll = function() {
    gerenciarBotaoTopo();
};

function gerenciarBotaoTopo() {
    const btn = document.getElementById("back-to-top");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

function voltarAoTopo() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function verificarRevelacao() {
    const elementos = document.querySelectorAll(".reveal");
    const alturaJanela = window.innerHeight;

    elementos.forEach(el => {
        const topoElemento = el.getBoundingClientRect().top;
        if (topoElemento < alturaJanela - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", verificarRevelacao);
window.addEventListener("load", verificarRevelacao);

const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

const frasesLogo = [
    "Tecnologia de Sistemas para Internet",
    "Seja Bem-vindo Calouro",
    "Ala o Garoto de Programa",
    "Vamos Codar?",
    "TI: Tristeza Imensa",
    "TSI" 
];

let indiceFrase = 0;
let digitando = false;

function animarLogo() {
    if (digitando) return;
    digitando = true;

    const elementoTexto = document.getElementById("logo-texto");
    const fraseDestino = frasesLogo[indiceFrase];
    let i = 0;

    
    elementoTexto.textContent = "";

    
    const intervalo = setInterval(() => {
        elementoTexto.textContent += fraseDestino.charAt(i);
        i++;

        if (i >= fraseDestino.length) {
            clearInterval(intervalo);
            setTimeout(() => { digitando = false; }, 1000); 
            
            
            indiceFrase = (indiceFrase + 1) % frasesLogo.length;
        }
    }, 50); 
}

const horas = document.getElementById('hora');
const minutos = document.getElementById('minuto');
const segundos = document.getElementById('segundo');

const dias = document.getElementById('dia');
const meses = document.getElementById('mes');
const anos = document.getElementById('ano');

const diaSemanaId = document.getElementById('diaSemana');
const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

let corBG = document.getElementById('corBG');
let corLetra = document.getElementById('corLetra');


const relogio = setInterval(function time() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let diaSemana = now.getDay();
    let dia = now.getDate();
    let mes = now.getMonth() + 1;
    let ano = now.getFullYear();


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    dia = dia < 10 ? "0" + dia : dia;
    mes = mes < 10 ? "0" + mes : mes;

    horas.textContent = h;
    minutos.textContent = m;
    segundos.textContent = s;

    dias.textContent = dia;
    meses.textContent = mes;
    anos.textContent = ano;

    diaSemanaId.textContent = diasDaSemana[diaSemana];
    
});

function trocarCorBG() {
    document.body.style.backgroundColor = corBG.value;
}

function trocarCorLetra() {
    document.body.style.color = corLetra.value;
}

corBG.addEventListener('input', trocarCorBG);
corLetra.addEventListener('input', trocarCorLetra);























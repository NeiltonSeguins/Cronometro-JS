"use strict"

var hora = 0;
var min = 0;
var seg = 0;

var tempo = 1000; //Quantos milésimos equivale a um segundo
var cont

function iniciar(){
    cont = setInterval(()=>{timer();}, tempo)
}

function pausar(){
    clearInterval(cont)
}

function parar(){
    clearInterval(cont)
    hora = 0;
    min = 0;
    seg = 0;

    document.getElementById('hora').innerText = '00';
    document.getElementById('minuto').innerText = '00';
    document.getElementById('segundo').innerText = '00';
}

function timer(){
    seg++;

    if(seg==60){
        seg = 0;
        min++;

        if(min==60){
            min = 0;
            hora++;
        }
    }

    var horas = (hora < 10 ? '0' + hora : hora);
    var minuto = (min < 10 ? '0' + min : min);
    var segundo = (seg < 10 ? '0' + seg : seg);

    document.getElementById('hora').innerText = horas;
    document.getElementById('minuto').innerText = minuto;
    document.getElementById('segundo').innerText = segundo;
}
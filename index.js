const timerHours = document.querySelector('.hours'),
    timerMinutes = document.querySelector('.minutes'),
    timerSeconds = document.querySelector('.seconds');

// Usuário Configurando o Timer

document.addEventListener('click', function (e) {
    settingTimer(e)
});

function settingTimer(e) {

    // Pegando o Botão pelo Evento do Click, e usando SwitchCase para comparar com a classe

    let pressedBtn = e.target;
    // Como os botões tem duas classes, a classe na posição 1 do objeto é a que indica a operação que deve ser feita
    switch (pressedBtn.classList[1]) {

        case 'hours-up':

            changeHours(timerHours, "plus");
            break

        case 'minutes-up':

            changeMinutesOrSeconds(timerMinutes, "plus", timerHours);
            break;

        case 'seconds-up':

            changeMinutesOrSeconds(timerSeconds, "plus", timerMinutes);
            break;

        case 'hours-down':

            changeHours(timerHours, "minus");
            break;

        case 'minutes-down':

            changeMinutesOrSeconds(timerMinutes, "minus", timerHours);
            break;

        case 'seconds-down':

            changeMinutesOrSeconds(timerSeconds, "minus", timerMinutes);;
            break;

    }

}

let interval;

function startTimer() {

    const intervalSeconds = 1000;
    clearInterval(interval)
    // Função dos Segundos
    interval = setInterval(function () {
        if (timerHours.innerHTML == 00 && timerMinutes.innerHTML == 00 && timerSeconds.innerHTML == 00) {
            clearInterval(interval);
            alert("Fim do Tempo")}else{
            timerSeconds.innerHTML--;
            addZeros(timerSeconds)
            if (timerSeconds.innerHTML == "0-1") {
                timerSeconds.innerHTML = "59"
                timerMinutes.innerHTML--
                addZeros(timerMinutes);
            }
            if (timerMinutes.innerHTML == "-1"){
                timerMinutes.innerHTML = "59"
                addZeros(timerHours);
                timerHours.innerHTML--
            }}
        }, intervalSeconds);}
        

function stopTimer(){
    clearInterval(interval);
}

function resetTimer(){
    clearInterval(interval);
    timerHours.innerHTML = "00";
    timerMinutes.innerHTML = "25";
    timerSeconds.innerHTML = "00";
}








function addZeros(element) {

    // Se o número for menor que "10", a função adiciona um "0" antes do número;

    if (element.innerHTML < 10) {
        element.innerHTML = "0" + element.innerHTML;
    }
}

function changeHours(hourNumber, plusOrMinus) {

    // Dependendo do botão pressionado, essa função vai ser chamada, trazendo o elemento a ser mudado, e a operação (+ ou -);

    // Aumentar o Número de Horas:

    if (plusOrMinus === "plus") {
        hourNumber.innerHTML++;

        // É chamada a função que adiciona um "0"

        addZeros(hourNumber);

        // Se o número de horas passar de 24, simplesmente é zerado o parametro das horas;

        if (hourNumber.innerHTML > 24) {
            hourNumber.innerHTML = "00";

            // Diminuir o Número de Horas:

        }

    } else {

        // Se o número de horas for 0, automaticamente é colocado em 24;

        if (hourNumber.innerHTML == 0) {
            hourNumber.innerHTML = 24;
        } else {
            hourNumber.innerHTML--;
            addZeros(hourNumber);
        }
    }
}


function changeMinutesOrSeconds(numberToChange, plusOrMinus, secondaryNumberToChange) {

    // A única diferença aqui é que é necessário mudar dois valores, o do botão pressionado e o valor seguinte a ele.

    if (plusOrMinus === "plus") {
        numberToChange.innerHTML++;
        if (numberToChange.innerHTML < 10) {
            numberToChange.innerHTML = "0" + numberToChange.innerHTML;
        } else if (numberToChange.innerHTML > 59) {
            numberToChange.innerHTML = "00";
            secondaryNumberToChange.innerHTML < 10 ? secondaryNumberToChange.innerHTML = "0" + (Number(secondaryNumberToChange.innerHTML) + 1) : secondaryNumberToChange.innerHTML++;
        }
    } else {
        numberToChange.innerText === "00" ? numberToChange.innerHTML = 60 : numberToChange.innerHTML--;
        if (numberToChange.innerHTML < 10) {
            numberToChange.innerHTML = "0" + numberToChange.innerHTML;
        }
    }
}
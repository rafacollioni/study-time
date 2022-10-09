const timerHours = document.querySelector('.hours'),
    timerMinutes = document.querySelector('.minutes'),
    timerSeconds = document.querySelector('.seconds');

// Usuário Configurando o Timer

document.addEventListener('click', function (e) {
    settingTimer(e)
});

function settingTimer(e) {

    // Pegando o Botão pelo Evento do Click, e usando SwitchCase para comparar com a classe

    let pressedBtn = e.target

    switch (pressedBtn.classList[1]) {

        case 'hours-up':

            timerHours.innerHTML++
            if (timerHours.innerHTML < 10) {
                timerHours.innerHTML = "0" + timerHours.innerHTML
            } else if (timerHours.innerHTML > 24) {
                timerHours.innerHTML = "00"
            }
            break

        case 'minutes-up':



















    }

}
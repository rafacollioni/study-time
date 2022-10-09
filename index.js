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

            timerMinutes.innerHTML++
            if (timerMinutes.innerHTML < 10){
                timerMinutes.innerHTML = "0" + timerMinutes.innerHTML
            }else if (timerMinutes.innerHTML > 59){
                timerMinutes.innerHTML = "00"
                timerHours.innerHTML < 10 ? timerHours.innerHTML = "0" + (Number(timerHours.innerHTML) + 1) : timerHours.innerHTML++
            }
            break

        case 'seconds-up':

            timerSeconds.innerHTML++
            if (timerSeconds.innerHTML < 10){
                timerSeconds.innerHTML = "0" + timerSeconds.innerHTML
            }else if (timerSeconds.innerHTML > 59){
                timerSeconds.innerHTML = "00"
                timerMinutes.innerHTML < 10 ? timerMinutes.innerHTML = "0" + (Number(timerMinutes.innerHTML) + 1) : timerMinutes.innerHTML++
            }
            break
        
        case 'hours-down':
            timerHours.innerText === "00" ? timerHours.innerHTML = 24 : timerHours.innerHTML--


            if (timerHours.innerHTML < 10) {
                timerHours.innerHTML = "0" + timerHours.innerHTML
            } else 
            break
            


















    }

}
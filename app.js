/* 
Crea qui la logica, ma ricorda sempre di modularizzare 
e di preservare la qualità complessiva del codice.
 */
import { counter, wordsRnd, setTimer, stopTimer } from './module.js'

function initTest() {
    // init var
    const container = document.getElementById('contenitore-parole')
    const timer = document.getElementById('timer')
    const input = document.getElementById('inp')
    const result = document.getElementById('result')

    const resultResponse = {
        'risposte esatte': 0,
        'risposte errate': 0
    }

    let indexSpan = 0
    let startTimer = true
    // timer init view
    timer.textContent = counter
    // create span element word
    wordsRnd.forEach(e => {
        const spanEl = document.createElement('span')
        spanEl.textContent = e
        container.appendChild(spanEl)
    })
    // start game
    const startGame = (e) => {
        startTimer === true ? setTimer() : null
        startTimer = false

        if (e.key === 'Enter') {
            if (indexSpan < container.childElementCount) {

                try {
                    if (wordsRnd[indexSpan] === e.target.value) {
                        container.children[indexSpan].classList.add('parola-corretta')
                        resultResponse['risposte esatte']++
                    } else {
                        container.children[indexSpan].classList.add('parola-errata')
                        resultResponse['risposte errate']++
                    }

                    container.children[indexSpan].classList.remove('selected')
                    indexSpan++
                    container.children[indexSpan].classList.add('selected')
                    e.target.value = ''

                } catch (error) {
                    stopTimer()
                    // result view
                    result.innerHTML = ` 
                    <p class="parola-corretta">Risposte esatte = ${resultResponse['risposte esatte']}</p>
                    <p class="parola-errata">Risposte errate = ${resultResponse['risposte errate']}</p>
                    `
                    return
                }
            }
        }
    }
    // some init 
    container.children[indexSpan].classList.add('selected')
    input.focus()
    input.addEventListener('keydown', startGame)
}

export default initTest;
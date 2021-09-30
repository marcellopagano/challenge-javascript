import words from './data.js'
// fn to shuffle 10 words from array
function shuffleArr(words) {
    for (let i = words.length - 1; i > 0; i--) {
        const j = Math.random() * words.length | 0;
        [words[i], words[j]] = [words[j], words[i]]
    }
    return words.slice(0, 10)
}
// create shuffle words array
const wordsRnd = shuffleArr(words)
// timer countdown
let counter = 60
let myTimer
const setTimer = () => {
    myTimer = setInterval(() => {
        counter--
        timer.textContent = counter
    }, 1000)
}
// timer stop
const stopTimer = () => {
    clearInterval(myTimer)
    myTimer = null;
}
export { counter, wordsRnd, setTimer, stopTimer }
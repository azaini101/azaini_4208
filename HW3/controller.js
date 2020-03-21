const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent
function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()*9)]
    
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id == hitPosition){ 
            result = result + 1
            score.textContent = result
            id.classList.add('splat')
            setTimeout(removeSplat, 500, id) //gets rid of splat image after .5 seconds
        }
    })
})

function moveMole(){ 
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime == 0){
        clearInterval(timerId)
        alert('GAME OVER! Your final score was: ' + result)
    }
}

function removeSplat(id){
    id.classList.remove('splat')
}

let timerId = setInterval(countDown, 1000)


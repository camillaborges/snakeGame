const grid = document.querySelector(".grid")
const startButton = document.querySelector("#start")
const score = document.querySelector("#score")
let squares = []
let currentSnake = [2,1,0]
let direction = 1
const width = 10

function createGrid() {
    for(let i = 0; i < 100; i++){
        const square = document.createElement("div")
        square.classList.add("square")
        grid.appendChild(square)
        squares.push(square)
    }
}

createGrid()

currentSnake.forEach(index => squares[index].classList.add('snake'))

function move() {
    if(
        (currentSnake[0] + width >= width*width && direction === width) || //if snake has hit bottom
        (currentSnake[0] % width === width-1 && direction === 1) || //if snake has hit right wall
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -width) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake')
    ) 
    return clearInterval(timerId)

    const tail = currentSnake.pop()
    console.log(tail)
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)
    squares[currentSnake[0]].classList.add('snake')
}

move()

let timerId = setInterval(move, 1000)

function control(e) {
    if (e.keyCode === 39) {
        direction = 1
        console.log('right pressed')
        
    } else if (e.keyCode === 38) {
        direction = -width
        console.log('up pressed')
        
    } else if (e.keyCode === 37) {
        direction = -1
        console.log('left pressed')
        
    } else if (e.keyCode === 40) {
        direction = +width
        console.log('down pressed')
        
    }
}

document.addEventListener("keyup", control)
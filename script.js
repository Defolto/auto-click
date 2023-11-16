const point = document.querySelector('.point')
const pointSec = document.querySelector('.pointSec')
const upAuto = document.querySelector('#upAuto')
const upClick = document.querySelector('#upClick')
const circle = document.querySelector('.circle')
const buyAuto = document.querySelector('#buyAuto')
const buyClick = document.querySelector('#buyClick')
const input = document.querySelector("input")
const changeColor = document.querySelector("#changeColor")

let myPoints = 0
let clickPoint = 1
let autoClick = 0

function renderPoints() {
    point.innerHTML = myPoints
    pointSec.innerHTML = autoClick
    circle.innerHTML = clickPoint
    buyClick.innerHTML = clickPoint ** 3
    buyAuto.innerHTML = autoClick ** 3
}

circle.addEventListener('click', ()=>{
    myPoints += clickPoint
    renderPoints()
})

upClick.addEventListener("click", ()=> {
    if (myPoints >= clickPoint**3) {
        myPoints -= clickPoint ** 3
        clickPoint += 1
        renderPoints()
    } else {
        alert("Не хватает бабосиков")
    }
})

upAuto.addEventListener('click', ()=>{
    if (myPoints >= autoClick ** 3) {
        myPoints -= autoClick ** 3
        autoClick += 1
        renderPoints()
    } else {
        alert("Не хватает бабосиков")
    }
})

setInterval(() => {
    myPoints += autoClick
    renderPoints()
}, 1000);

changeColor.addEventListener("click", ()=> {
    if (myPoints >= 500) {
        myPoints -= 500
        renderPoints()
        circle.style.backgroundColor = input.value
    } else {
        alert("бомжик")
    }
})
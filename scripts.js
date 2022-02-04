const canvasDiv = document.querySelector("#canvasDiv")

function createDivs () {
    for (let i = 0; i <= 15; i++) {
        const outerDiv = document.createElement("div")
        outerDiv.classList.add("firstSquare")
        for (let i = 0; i <= 15; i++) {
            const innerDiv = document.createElement("div")
            innerDiv.classList.add("square")
            outerDiv.appendChild(innerDiv)
        }
        canvasDiv.appendChild(outerDiv)
    }
}

createDivs()

function colorChange () {

}

const innerSquares = document.querySelector(".square")
const outerSquare = document.querySelector(".firstSquare")

innerSquares.addEventListener("mouseenter", colorChange())
outerSquare.addEventListener("mouseenter", colorChange())
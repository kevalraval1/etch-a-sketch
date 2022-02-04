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
    const squares = document.querySelectorAll(".square")
    squares.forEach(element =>  {
        element.style.width = (100/15) + "vw";
    })
}

createDivs()

const innerSquares = document.querySelectorAll(".square")
for (let i=0; i <innerSquares.length; i++) {
    let square = innerSquares[i]
    square.addEventListener("mouseenter", function() {
        this.classList.add("red")
    })
}

const clear = document.getElementById("clear-canvas");
clear.addEventListener("click", function() {
    for (let i=0; i < innerSquares.length; i++) {
        let square = innerSquares[i]
        square.classList.remove("red")
    }
})
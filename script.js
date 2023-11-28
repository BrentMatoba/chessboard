let board = document.getElementById("chessboard")


for(let i=0; i<8; i++){
    const row = document.createElement("div")
    for(let j = 0; j<8; j++){
        let square = document.createElement("div")
        square.classList.add("square")
        row.appendChild(square)
    }
    board.append(row)
}
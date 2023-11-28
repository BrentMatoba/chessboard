let board = document.getElementById("chessboard")

function createBoard(){
let white = true;
for(let i=0; i<8; i++){
    if(isEven(i)){
        white = true;
    }
    else{white=false;}

    const row = document.createElement("div")
    for(let j = 0; j<8; j++){
        let square = document.createElement("div")

        if(white==true){
            square.classList.add("square", "white")
            white=false;
        }
        else{
            square.classList.add("square", "black")
            white=true;
        }
        row.appendChild(square)
    }
    board.append(row)
}}

function isEven(num){
    return num % 2 ===0;
}

createBoard()
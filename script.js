let board = document.getElementById("chessboard")

function createBoard(){

let white = true;
const letterArray = ["a","b","c","d","e","f","g","h"]
let letterCounter = 0;

for(let i=0; i<8; i++){
    let letter = letterArray[letterCounter]
    counter = 8;
    if(isEven(i)){
        white = true;
    }
    else{white=false;}

    const row = document.createElement("div")
    for(let j = 0; j<8; j++){
        let square = document.createElement("div")
        square.textContent = letter + counter;
        counter -=1;

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
    letterCounter+=1;
}}

function isEven(num){
    return num % 2 ===0;
}

createBoard()
//I should the majority of this file into a seperate "chessboard" javascript file, this is going to get really annoying really fast.
//import statements don't work until I understand how moduls work poggers
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
        let squareDiv = document.createElement("div")
        squareDiv.textContent = letter + counter;
        counter -=1;

        if(white==true){
            squareDiv.classList.add("square", "white")
            white=false;
        }
        else{
            squareDiv.classList.add("square", "black")
            white=true;
        }
        row.appendChild(squareDiv)
    }
    board.append(row)
    letterCounter+=1;
}}

function isEven(num){
    return num % 2 ===0;
}

createBoard()
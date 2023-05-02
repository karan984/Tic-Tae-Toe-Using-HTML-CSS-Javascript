let gameover = new Audio("gameover");
let ting = new Audio("ting.mp3");
let turn = "X";
let isgameover = false;

let boxes = document.querySelectorAll(".box");

function checkWin(){
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(function(win){
        if((boxes[win[0]].innerHTML === boxes[win[1]].innerHTML) && (boxes[win[2]].innerHTML === boxes[win[1]].innerHTML) && 
        boxes[win[0]].innerHTML!==""){
            console.log("Game Over");
            boxes[win[0]].setAttribute("style", "background-color:blueviolet");
            boxes[win[1]].setAttribute("style", "background-color:blueviolet");
            boxes[win[2]].setAttribute("style", "background-color:blueviolet");
            isgameover = true;
        }
    })
}

function changeTurn(){
    return turn === "X" ? "O" : "X";
}


boxes.forEach(function(box){
    box.addEventListener("click", function(){
        
        if(isgameover===true){
            alert("Please Reset !");
        }else if(box.innerHTML!==""){
            alert("Please select empty box");
            ting.play();
        }else{
            box.innerHTML=turn;
            ting.play();
            checkWin();
        

        if(isgameover === false){
            turn = changeTurn();

            let full = true;
            boxes.forEach(function(box){
                if(box.innerHTML===""){
                    full = false;
                }
            })

            if(full === false){
                document.querySelector(".info").innerHTML="Turn For "+turn;
            }else{
                document.querySelector(".info").innerHTML="Game Over ! Please reset!";
            }
        }else{
            document.querySelector(".info").innerHTML=turn + " won the game!";
            document.querySelector(".imgbox").getElementsByTagName("img")[0].setAttribute("style", "display:inline");
        }
        }
    })
})

document.querySelector("#reset").addEventListener("click", function(){
    isgameover=false;
    turn = "X";
    document.querySelector(".info").innerHTML="Turn For "+turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].setAttribute("style", "display:none");
    boxes.forEach(function(box){
        box.innerHTML="";
        box.setAttribute("style", "background-color:white");
    })
})

//tictactoe
const els = Array.from(document.querySelectorAll('.box'))
els.forEach(e=>e.addEventListener('click', play))            
let player = "X";
var playerXmoves = [];
var PlayerYmoves = [];
var winConditions = [
                    ["1", "2", "3"],
                    ["4", "5", "6"],
                    ["7", "8", "9"],
                    ["1", "4", "7"],
                    ["2", "5", "8"],
                    ["3", "6", "9"],
                    ["1", "5", "9"],
                    ["3", "5", "7"]
                    ];

function checkForWin(playerMoves) {
    
    winConditions.forEach(condition => {
        var check = condition.every((element) => {
                    return playerMoves.indexOf(element) !== -1;
                    });

        if (check) {alert(player + " es el ganador");
                    location.reload()};
        }
        );
}

function play(e){
    console.log(player)
    var move = e.target.id
    console.log(move)
    if (player == "X"){
            e.target.innerHTML = player;
            playerXmoves.push(move);
            checkForWin(playerXmoves);
            player = "O";
            }
    else{
        e.target.innerHTML = player;
        PlayerYmoves.push(move);
        checkForWin(PlayerYmoves);
        player = "X";
    }
}
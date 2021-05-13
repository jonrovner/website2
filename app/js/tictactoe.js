//tictactoe
            
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
    var move = e.id;
    if (player == "X"){
            e.innerHTML = player;
            playerXmoves.push(move);
            checkForWin(playerXmoves);
            player = "O";
            }
    else{
        e.innerHTML = player;
        PlayerYmoves.push(move);
        checkForWin(PlayerYmoves);
        player = "X";
    }
}
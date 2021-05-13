var gameCount = 0;
var win = 0;
var winGoal = 0;
var clickCount = 0;
var chp1 = "";
var chp2 = "";
var chpName1 = "";
var chpName2 = "";
var boardNumber = "";
var boardId = "";

function startGame() {
  boardNumber = document.getElementById("boardSelection").value;
  boardId = "board" + boardNumber;
  winGoal = parseInt(boardNumber);
  winGoal = winGoal / 2;
  win = 0;

  drawBoard();

  var images = [
    { name: "gato1", src: "img/chips/gato.png" },
    { name: "perro1", src: "img/chips/perro.png" },
    { name: "pez1", src: "img/chips/pez.png" },
    { name: "ave1", src: "img/chips/ave.png" },
    { name: "gato2", src: "img/chips/gato.png" },
    { name: "perro2", src: "img/chips/perro.png" },
    { name: "pez2", src: "img/chips/pez.png" },
    { name: "ave2", src: "img/chips/ave.png" },
    { name: "caba1", src: "img/chips/caba.png" },
    { name: "caba2", src: "img/chips/caba.png" },
    { name: "cerd1", src: "img/chips/cerd.png" },
    { name: "cerd2", src: "img/chips/cerd.png" },
    { name: "lion1", src: "img/chips/lion.png" },
    { name: "lion2", src: "img/chips/lion.png" },
    { name: "vaca1", src: "img/chips/vaca.png" },
    { name: "vaca2", src: "img/chips/vaca.png" },
    { name: "zebr1", src: "img/chips/zebr.png" },
    { name: "zebr2", src: "img/chips/zebr.png" },
    { name: "tigr1", src: "img/chips/tigr.png" },
    { name: "raco1", src: "img/chips/raco.png" },
    { name: "jira1", src: "img/chips/jira.png" },
    { name: "lemu1", src: "img/chips/lemu.png" },
    { name: "hipo1", src: "img/chips/hipo.png" },
    { name: "geck1", src: "img/chips/geck.png" },
    { name: "tigr2", src: "img/chips/tigr.png" },
    { name: "raco2", src: "img/chips/raco.png" },
    { name: "jira2", src: "img/chips/jira.png" },
    { name: "lemu2", src: "img/chips/lemu.png" },
    { name: "hipo2", src: "img/chips/hipo.png" },
    { name: "geck2", src: "img/chips/geck.png" },
  ];

  images = images.slice(0, boardNumber);
  images = shuffle(images);
  images.forEach(function (image) {
    var chip = document.createElement("div");
    chip.classList.add("chipback");
    chip.innerHTML =
      '<img class="chip" id = "' +
      image.name +
      '" src = "' +
      image.src +
      '" onclick = "playGame(this)">';
    document.getElementById(boardId).appendChild(chip);
  });
}
function playGame(it) {
  if (clickCount == 0) {
    chpName1 = it.id.substr(0, 3);
    chp1 = document.getElementById(it.id);
    chp1.classList.add("playing");
    clickCount = 1;
  } else {
    clickCount = 0;
    chpName2 = it.id.substr(0, 3);
    chp2 = document.getElementById(it.id);
    chp2.classList.add("playing");

    if (chpName1 == chpName2) {
      chp1.onclick = "";
      chp2.onclick = "";
      win++;
    } else {
      setTimeout(() => {
        chp1.classList.remove("playing");
        chp2.classList.remove("playing");
      }, 700);
    }
  }
  if (win == winGoal) {
    let chips = Array.from(document.querySelectorAll("img"));
    setTimeout(() => {
      chips.forEach(function (chip) {
        chip.classList.remove("playing");
        chip.classList.add("winer");
      });
    }, 200);
  }
}
function drawBoard() {
  if (gameCount == 0) {
    var board = document.getElementById("board");
    board.parentNode.removeChild(board);
  } else {
    var boards = Array.from(document.getElementsByClassName("board"));
    boards.forEach(function (board) {
      board.parentNode.removeChild(board);
    });
  }
  var board = document.createElement("div");
  board.id = boardId;
  board.classList.add("board");
  board.classList.add(boardId);
  document.getElementById("boardContainer").appendChild(board);
  gameCount = 1;
}
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

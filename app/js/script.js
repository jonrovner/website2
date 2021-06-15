// p5.js animation

let spritesheet;
let spritedata;
let animation = []
let man;

class Sprite {
  constructor(animation, x, y, speed){
    this.x = x;
    this.y = y;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = 0;
  }
  show(){
    let index = floor(this.index)%this.len;
    image(this.animation[index], this.x, this.y)
  }
  animate(){
    this.index += this.speed;
    //this.x += this.speed * 18;
    if (this.x > width){
      this.x = -this.w
    }
  }
}

function preload(){
  spritedata = loadJSON('walk.json')
  spritesheet = loadImage('walk3.png')
}

function setup(){
  var canvas =  createCanvas(600, 600);
  canvas.parent('anim')
  console.log(spritedata)
  let frames = spritedata.frames;
  for (let i= 0; i<frames.length; i++){
    let pos = frames[i].position
    let img = spritesheet.get(pos.x, pos.y, 92, 162)
    animation.push(img)
  }
  man = new Sprite(animation, 250, 175, 0.1)
}

function draw(){
  background(255)
  man.show();
  man.animate();
}



//Type effect

async function typeSentence(sentence, element, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      document.getElementById(element).innerHTML += letters[i];
      i++
    }
    return;
  }

async function untype(word, element)  {
  const lettersToGo = word.split("")
  const lettersIn = document.getElementById(element).innerHTML.split("")
  for (var i = 0; i<lettersToGo.length; i++){
    await waitForMs(50);
    lettersIn.pop();
    document.getElementById(element).innerHTML = lettersIn.join("")
  }
  return;
}
async function retype(word, element){
  const lettersToAdd = word.split("")
  let i = 0;
    while(i < lettersToAdd.length) {
      await waitForMs(100);
      document.getElementById(element).innerHTML += lettersToAdd[i];
      i++
    }
    return;
}
  
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

window.addEventListener('load', async ()=>{
    typeSentence("Frontend developer", "title");
    await waitForMs(2000);
    untype("developer", "title")
    await waitForMs(1000);
    retype("Author", "title");
    await waitForMs(1500);
    untype("author", "title");
    await waitForMs(1500)
    retype("Artist", "title");
    await waitForMs(1000);
    typeSentence("Here´s a collection of my works and projects", "subtitle", 20)
    
})
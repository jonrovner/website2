// p5.js animation


let spritesheet;
let spritedata;
let tree;
let animation = [];
let man;
let bush;
let r, g, b;

  
class Walker {
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
    this.index += 0.2;
    //this.x += this.speed * 18;
    if (this.x > width){
      this.x = -this.w
    }
  }
}

class Thing {
  constructor(pic, x, y, w, h, speed){
    this.pic = pic;
    this.y = y;
    this.x = x;
    this.w = w;
    this.h = h;
    this.speed = speed;

  }
  show(){
    image(this.pic, this.x, this.y, this.w, this.h)
  }
  move(){
    this.x -= this.speed;
    if (this.x <0){
      this.x = width
    }

  }
}

function preload(){
  spritedata = loadJSON('walk.json')
  spritesheet = loadImage('walk3.png')
  treeImg = loadImage('tree.png')
}

function setup(){
  var canvas =  createCanvas(windowWidth*0.6, 375);
  frameRate(30);
  canvas.parent('anim')
  
  let frames = spritedata.frames;
  for (let i= 0; i<frames.length; i++){
    let pos = frames[i].position
    let img = spritesheet.get(pos.x, pos.y, 92, 162)
    animation.push(img)
  }
  man = new Walker(animation, windowWidth/3, 125, 0.5);
  tree = new Thing(treeImg, width, 88, 20, 20, 0.3)
  bush = new Thing(treeImg, width, 60, 140, 140, 0.8)
}

function draw(){
  r=255
  g=255
  b=255
  

  background(map(bush.x, 0, width, 0, 255), map(tree.x, 0, width, 100, 255), b)
  
  stroke(190)
  line(0,100,width,100)
  
  man.show();
  man.animate();
  tree.show();
  tree.move();
  bush.show();
  bush.move();
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
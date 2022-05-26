var alvos, alvosI, mira, miraI;
var iniciar,iniciarI;
var grupoAlvos;
var score;
var cenario;
var tiro;
function preload() {
  alvosI = loadImage("alvo.png");
  miraI = loadImage("mira.png");
  //cenario = loadImage("");
  tiro = loadSound("TiroSom.mp3");
  iniciarI = loadImage("iniciar.png");
}
function setup() {
  createCanvas(800, 800);

  iniciar = createSprite(400, 400, 100, 50);
  iniciar.addImage(iniciarI);
  iniciar.scale = 0.1;

  mira = createSprite(400, 400, 30, 30);
  mira.addImage(miraI);

  grupoAlvos = createGroup();

  score = 0;
}

function draw() {
  background("lightgreen");

  mira.x = World.mouseX;
  mira.y = World.mouseY;
  mira.shapeColor = "red"
  mira.scale = 0.2;

  

  if (mousePressedOver(iniciar)) {
    iniciar.x = 1000;
    criarAlvos();
  }

  if (mousePressedOver(alvos)) {
    grupoAlvos.destroyEach();
    criarAlvos();
    score = score + 1;
    tiro.play();
    
  }
  
  text("score: " + score, 700, 100)
  drawSprites();
}
function criarAlvos() {
  alvos = createSprite(Math.round(random(100, 700)), Math.round(random(100, 700)), 20, 20);
  alvos.addImage(alvosI);
  alvos.scale = 0.1;
  grupoAlvos.add(alvos);
 
}




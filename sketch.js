var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var health = 100
var database;

var player1, player2,players

var background;

var ground;

function preload(){
 player1 = loadImage("images/capture.JPG")
 player2 = loadImage("images/capture.JPG") 
 background = loadImage("images/game background.JPG")
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}

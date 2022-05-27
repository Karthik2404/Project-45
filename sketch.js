const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var bg_img , circleImg ;
var tree_1 , tree_2 , tree_3 , tree_4 ;
var gun , horn , knife , stick ;
var tree1  ,tree2 , tree3 , tree4 , tree5 , tree6 , tree7 , tree8 ;
var man;


function preload()
{
  bg_img = loadImage('BG.png');
  circleImg = loadImage('Circle.png');
  tree_1 = loadImage('Tree1.png');
  tree_2 = loadImage('Tree2.png');
  tree_3 = loadImage('Tree3.png');
  tree_4 = loadImage('Tree4.png');
  stickMan = loadImage('Stick.png');
  gunMan = loadImage('Gun.png');
  hornMan = loadImage('Horn.png');
  knifeMan = loadImage('Knife.png');
}

function setup() 
{
  createCanvas(800,800);
  frameRate(80);

  engine = Engine.create();
  world = engine.world;

  man = createSprite(250,270,20,20);
  man.addImage(stickMan);
  man.scale = 0.45;

  tree1 = createSprite(520,240,10,40);  
  tree1.addImage(tree_1);
  tree1.scale = 0.5;

  tree2 = createSprite(180,280,10,40);  
  tree2.addImage(tree_2);
  tree2.scale=0.5;

  tree3 = createSprite(380,380,10,40);  
  tree3.addImage(tree_3);

  tree4 = createSprite(240,420,10,40);  
  tree4.addImage(tree_4);

  tree5 = createSprite(550,400,10,40);  
  tree5.addImage(tree_2);
  tree5.scale=0.5;

  tree6 = createSprite(300,590,10,40);  
  tree6.addImage(tree_1);
  tree6.scale = 0.5;

  tree7 = createSprite(520,580,10,40);  
  tree7.addImage(tree_3);

  tree8 = createSprite(350,200,10,40);  
  tree8.addImage(tree_4);

 
  gun = createImg('gunIMG.png');
  gun.position(width-670,20);
  gun.size(150,80);
 // gun.mouseClicked(mute);

 horn = createImg('hornIMG.png');
 horn.position(width-500,15);
 horn.size(100,80);
// gun.mouseClicked(mute);

  knife = createImg('knifeIMG.png');
  knife.position(width-390,15);
  knife.size(90,65);
 // gun.mouseClicked(mute);

  stick = createImg('stickIMG.png');
  stick.position(width-270,20);
  stick.size(80,80);
 // gun.mouseClicked(mute);

  treesGroup = new Group();

}


function draw() 
{
  background(51);
  image(bg_img,0,0,width,height);
  image(circleImg,75,75,width-150,height-150);

  if (keyDown("LEFT_ARROW")){
    man.x -= 2
  }

  if (keyDown("RIGHT_ARROW")){
    man.x += 2
  }

  if (keyDown("UP_ARROW")){
    man.y -= 2
  }

  if (keyDown("DOWN_ARROW")){
    man.y += 2
  }


  
  Engine.update(engine);
  drawSprites();
}

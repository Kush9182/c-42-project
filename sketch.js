const World=Matter.World;
const Bodies=Matter.Bodies;
const Engine=Matter.Engine;

var maxDrops=100;
var da=[]

function preload(){
    a=loadImage("1.png")
    b=loadImage("2.png")
    c=loadImage("3.png")
    d=loadImage("4.png")
    
}

function setup(){
    createCanvas(400,800)
    engine=Engine.create();
    world=engine.world;

    u = new Drop(200,0);
    p = new Umbrella(200,600)
   
    var options={
        isStatic:true
    }

    helper=Bodies.circle(220,520,110,options)
    World.add(world,helper)

    for(var i=0;i<maxDrops;i++){
        da.push(new Drop(random(0,400),random(0,400)))
    }

}

function draw(){
    background("black");
    Engine.update(engine);

    u.display()
    p.display()

    for(var i=0;i<maxDrops;i++){
        da[i].display()
    }
     
if(frameCount%50==0){
    var w=Math.round(random(1,4))
    switch(w){
        case 1:image(a,random(10,390),50,300,300)
        break;
        case 2:image(b,random(10,390),50,300,300)
        break;
        case 3:image(c,random(10,390),50,300,300)
        break;
        case 4:image(d,random(10,390),50,300,300)
    default:break    
    }}

    drawSprites();
}   

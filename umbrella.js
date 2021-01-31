class Umbrella{
    constructor(x,y){
        var option={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,1,option);
        this.image=loadImage("walking_1.png")
        this.r=500;
        World.add(world,this.image);
        World.add(world,this.body)
    }
    display(){
         
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.r,this.r)
    }
}
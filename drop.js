class Drop{
    constructor(x,y){
        var option={
            friction:0.1
        }
        this.body=Bodies.circle(x,y,4,option);
        this.r=4;
        World.add(world,this.body);
    }
    display(){
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r);
        if(this.body.position.y>800){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
    }}
}
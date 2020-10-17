class Ball{
    constructor(){
        this.body = Bodies.circle(350,350,70);
        World.add(world,this.body);
        this.color = color(random(0,255),random(0,255),random(0,255));
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        push();
        fill(this.color);
        ellipse(pos.x,pos.y,70,70);
        pop();
    }
}
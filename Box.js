class Box{
    constructor(x,y){
    this.body = Bodies.rectangle(x,y,20,20);
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var rand1 = random(0,255);
        var rand2 = random(0,255);
        var rand3 = random(0,255);
        push();
        fill(rand1,rand2,rand3);
        rectMode(CENTER);
        rect(pos.x,pos.y,20,20);
        pop();
    }
}
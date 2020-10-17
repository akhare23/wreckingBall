class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pos1 = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("white");
        strokeWeight(5);
        line(pos1.x,pos1.y,pointB.x,pointB.y);
        pop();
    }

    
}
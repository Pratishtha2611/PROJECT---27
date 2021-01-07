class Rope{
    constructor(body1, body2 ,offsetX ,offsetY){
        this.offsetX = this.offsetX;
        this.offsetY = this.offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.Rope = Constraint.create(options);
        World.add(world, this.Rope);
    }

    display(){
        var pointA = this.Rope.bodyA.position;
        var pointB = this.Rope.bodyB.position;
        strokeWeight(4);
        stroke("orange");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}
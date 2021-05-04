class BIRD {
    constructor(x,y){
        var options = {
            'restitution':0.5,
            'friction':5.0,
            'density':3.0
        }
        this.body = Bodies.rectangle(x,y,100,50,options);
        World.add(world,this.body);
        this.width=100;
        this.height=50;
    }
    display (){
        var pos =this.body.position;
    var angle = this.body.angle;
    pos.x = mouseX;
    pos.y = mouseY;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("white")
    fill("orange");
    rect(0, 0, this.width, this.height);
    pop();
    }
}
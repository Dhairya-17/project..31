class Particles {
    constructor(x, y, r) {
        var options = {

            isStatic:false,
            
        }
        this.color=color(random(0,255),random(0,255),random(0,255))
        this.body = Bodies.circle(x, y,r,  options);
        this.r=r;
        
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;

        push()
       translate(pos.x,pos.y)
      ellipseMode(CENTER);
      fill(this.color)
       ellipse(0,0,this.r,this.r)
       pop()
       
    }
};
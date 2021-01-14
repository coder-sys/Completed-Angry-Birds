class SlingShot{
    constructor(bodyA, pointB){
         this.options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 16
        }
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(this.options);
        World.add(world, this.sling);
    }
    attach(body){
        this.options['bodyA'] = body;
    }
    
    fly(){
        this.options['bodyA'] = null;
    }

    display(){
        image(this.sling1,200,20);
        image(this.sling2,170,20);
    }
    
}
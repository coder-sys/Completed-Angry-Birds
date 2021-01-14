class Apig extends BaseClass {
    constructor(tatic){
        super(1000,400,300,60);
        Matter.Body.setStatic(this.body,tatic)
        Matter.Body.setAngle(this.body,PI/2)
        this.image = loadImage("sprites/wood2.png")
    }
    display(){
        super.display()
    }
}
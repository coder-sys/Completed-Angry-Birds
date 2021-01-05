class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10){
       this.position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(this.position);
    }
   
    var i = 0;
    while(i < this.trajectory.length){
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
      i++
    }
  }
}

class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
    this.m = 1
  }
  display() {
    super.display();
    if(this.body.velocity.x > 20 && this.body.position.x > 220){
       this.position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(this.position);
    }
    var i = 0;
    while(i < this.trajectory.length){
      image(this.smokeImage,this.trajectory[i][0]*this.m,this.trajectory[i][1]*this.m)
      i = i + 1
    } 
  }
}
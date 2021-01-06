class Ball{

    constructor(x,y){
    
         var options={
    
                isStatic:false,
                restitution:0.3,
                friction:1,
                density:0.8
    
         }
    
    
      this.body= Bodies.rectangle(x,y,50,50,options);
      this.width=50;
      this.height=50;
      this.image=loadImage("Crumpled_Ball.jpg");
      World.add(world,this.body);
    
    
    }
    display(){
    var pos=this.body.position;
    var angle= this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    imageMode(CENTER);
    image (this.image,0,0,this.width,this.height);
    pop ();
    
    
    }
    
    
    
    
    }
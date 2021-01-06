class BaseClass{

    constructor(x,y,width,height){

        var options={

            isStatic:true,
            friction:1,
            density:1,
            restitution:0.8
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        
        World.add(world,this.body);
    }

    show(){

        var pos=this.body.position;
        var angle= this.body.angle;
        push ();
        rotate (angle);
        translate (pos.x,pos.y);
        imageMode (CENTER);
        image (this.image,0,0,this.width,this.height);
    }


    
}
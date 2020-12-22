class dustbin{
    constructor(x,y){
   this.x = x;
   this.y = y;
   this.angle = 0;
   this.bottomBody = Bodies.rectangle(this.x,y,100,20,{isStatic:true})
   this.leftBody = Bodies.rectangle(1145,610,20,100,{isStatic:true})
    Matter . Body.setAngle(this.leftBody,this.Angle)
    this.rightBody = Bodies.rectangle(1245,610,20,100,{isStatic:true})
    Matter . Body.setAngle(this.rightBody,-1*this.Angle)
    World . add(world,this.bottomBody)
    World . add(world,this.leftBody)
    World . add(world,this.rightBody)
    }
    display(){
        var posBottom = this.bottomBody.position
        var posLeft = this.leftBody.position
        var posRight = this.rightBody.position
        push ();
        translate (posLeft.x,posLeft.y)
        rectMode (CENTER)
        angleMode(RADIANS)
        stroke (255)
        fill ("orange")
        rotate (this.angle)
        rect(0,0,20,100)
        pop ();
        push ();
        translate (posRight.x,posRight.y)
        rectMode (CENTER)
        angleMode(RADIANS)
        stroke (255)
        fill ("yellow")
        rotate (-1*this.angle)
        rect(0,0,20,100)
        pop ();
        push ();
        translate (posBottom.x,posBottom.y)
        rectMode (CENTER)
        angleMode(RADIANS)
        stroke (255)
        fill ("blue")
        //rotate (this.angle)
        rect(0,0,100,20)
        pop ();
    }
}
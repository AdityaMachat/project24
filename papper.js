class Papper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
             restitution:0.5,
             density:1.2,
             friction:0.5,
        }
        this.body= circle(x,y,radius,options);
        this.widh=radius;
        World.add(world,this.body);
        }
        display(){
         var posx=this.body.positionx
         var posy=this.body.positiony
         ellipseMode(CENTER);
         ellipse(posx,posy,this.radius);

        }
}
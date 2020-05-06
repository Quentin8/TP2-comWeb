function Circle(radius){
    this.rayon = radius;

}
Circle.prototype = Object.create(shape.prototype);
Circle.prototype.draw = function(context){
    let c = this.getCenter();
    context.beginPath();
    context.arc(c.x,c.y,this.rayon,0,2*Math.PI);
    context.stroke();
};
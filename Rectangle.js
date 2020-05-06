function Rectangle(px,py){
    this.width = px;
    this.height = py;
}
Rectangle.prototype = Object.create(shape.prototype);

Rectangle.prototype.draw = function(context){
    let c = this.getCenter();
    context.beginPath();
    context.rect(c.x,c.y,this.width, this.height);
    context.stroke();
};

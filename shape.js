function shape(x,y){
    this.center = new Point(x,y);
}

shape.prototype.setCenter = function(center){this.center = center;};
shape.prototype.draw = function(context){};
shape.prototype.getCenter = function(){return this.center;};
function Circle(radius){
    this.radius = radius;

    this.draw = function(){
        console.log("draw");
    }
}

const c = new Circle(1);

Circle.prototype.move = function(){
    console.log("move");
}

c.move();
console.log(c);
class solution{
    isPalindrome(str){
        let stack = new Array();
        for (char of str){
            if (char === stack[stack.length-1]){
                stack.pop()
            }else{
                stack.push(char)
            }
        }
        return stack.length === 0;
    }
}

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
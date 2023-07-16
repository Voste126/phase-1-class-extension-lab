// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    get countSides(){
       return this.sides.length;
    }
    get perimeter(){
        return this.sides.reduce((sum,side) => sum + side, 0);
    }

}
//call for the triangle
class Triangle extends Polygon{
    get isValid(){
        const [a, b, c] = this.sides;
        return a + b > c && a + c > b && b + c > a;
    }
}
//class for the square
class Square extends Polygon{
    get isValid(){
        const [a,b,c,d] = this.sides;
        return a===b && a===c && a===d &&
        b===a && b===c && b===d && c===b && c===a && c===d &&
        d===b && d===c && d===a
        }
    
    get area(){
        const sideLength = this.sides[0];
        return sideLength ** 2;
    }
}

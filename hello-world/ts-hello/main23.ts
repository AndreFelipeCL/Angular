class Point23 {
    private x: number;
    private y: number;
    
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point23 = new Point23(1, 2);
point23.draw();
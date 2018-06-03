class Point22 {
    x: number;
    y: number;
    
    constructor(x?: number, y?: number){
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point22 = new Point22(1, 2);
point22.x = 1
point22.y = 2
point22.draw();
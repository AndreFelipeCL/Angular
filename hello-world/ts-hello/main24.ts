class Point24 {
    constructor(private x?: number, private y?: number){}

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }
}

let point24 = new Point24(1, 2);
point24.draw();
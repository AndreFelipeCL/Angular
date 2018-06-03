class Point21 {
    x: number;
    y: number;

    draw(){
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point21){
        //..
    }
}

let point21 = new Point21();
point21.x = 1;
point21.y = 2;
point21.draw();

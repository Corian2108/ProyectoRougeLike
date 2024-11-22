import { Vector } from "./vector.js";

export class map {
  constructor(XAxis, YAxis, Matrix) {
    XAxis = this.XAxis;
    YAxis = this.YAxis;
    Matrix = this.Matrix;
  }

  generate() {
    this.XAxis = document.getElementById("inputX").value;
    this.YAxis = this.XAxis;
    this.Matrix = [];
    for (let i = 0; i < this.XAxis; i++) {
      this.Matrix.push([]);
      for (let j = 0; j < this.XAxis; j++) {
        let vector = new Vector(i, j);
        this.Matrix[i].push(vector);
      }
    }
    console.log(this.Matrix);
  }
}

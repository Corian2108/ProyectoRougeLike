import { Item } from "./item.js";

//3 definir la clase que se alvergará dentro de la matriz
export class Vector {
  constructor(
    XCoord,
    YCoord,
    XCont = false,
    XContPos = false,
    XContNeg = false,
    YCont = false,
    YContPos = false,
    YContNeg = false,
    ItemMap = new Item()
  ) {
    (this.XCoord = XCoord),
      (this.YCoord = YCoord),
      (this.XCont = XCont),
      (this.XContPos = XContPos),
      (this.XContNeg = XContNeg),
      (this.YCont = YCont),
      (this.YContPos = YContPos),
      (this.YContNeg = YContNeg),
      (this.ItemMap = ItemMap);
  }
}

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  /* returns value of constructor (this) which species was called
   * The return value is then used to construct return values from class
   * methods that create new class/objects */

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
  /* SubArray[Symbol.species] === SubArray; So this above returns its class object */
}

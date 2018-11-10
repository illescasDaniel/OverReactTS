/*tslint:disable:interface-name*/
export { }

declare global {
  interface String {
    isEmpty(): boolean
    isBlank(): boolean
  }
}

String.prototype.isEmpty = function () {
  return this.length === 0
}

String.prototype.isBlank = function () {
  return this.trim().length === 0
}
/*tslint:enable:interface-name*/

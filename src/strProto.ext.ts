interface String {
    myCoolMethod(input: number): string;
}
 String.prototype.myCoolMethod = function (inputValue: number): string {
    return this + inputValue.toString();
};
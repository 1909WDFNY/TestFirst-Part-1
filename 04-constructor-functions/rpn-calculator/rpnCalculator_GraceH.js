/* eslint-disable no-unused-vars, no-throw-literal*/

const RPNCalculator = function() {
    this.stack = [];
}

RPNCalculator.prototype.push = function(num) {
    this.stack.push(num);
}

RPNCalculator.prototype.mathPop = function(mathFunc){
    if (this.stack.length < 2) {
        throw 'rpnCalculatorInstance is empty';
    }
    else {
        const num2 = this.stack.pop();
        const num1 = this.stack.pop();
        this.stack.push(mathFunc(num1, num2));
    }
}

RPNCalculator.prototype.value = function() {
    return this.stack[this.stack.length-1];
}

RPNCalculator.prototype.plus = function() {
    this.mathPop((a, b) => a + b);
}

RPNCalculator.prototype.minus = function() {
    this.mathPop((a, b) => a - b)
}

RPNCalculator.prototype.times = function() {
    this.mathPop((a, b) => a * b);
}

RPNCalculator.prototype.divide = function() {
    this.mathPop((a, b) => a / b)
}

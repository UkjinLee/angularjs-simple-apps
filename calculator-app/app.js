angular.module('calculatorApp', [])
  .controller('CalculatorCtrl', CalculatorCtrl);

function CalculatorCtrl() {

  this.result = 0;

  this.buttonClicked = function (button) {
    this.operator = button;
  };

  this.computeResult = function () {
    var number1 = parseFloat(this.input1);
    var number2 = parseFloat(this.input2);

    switch (this.operator) {
      case "+":
        this.result = number1 + number2;
        break;

      case "-":
        this.result = number1 - number2;
        break;

      case "*":
        this.result = number1 * number2;
        break;

      case "/":
        this.result = number1 / number2;
        break;
    }
  };
}

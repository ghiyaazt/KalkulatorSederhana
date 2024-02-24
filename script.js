class Calculator {
    constructor(display) {
      this.display = display;
      this.currentNum = '';
      this.prevNum = '';
      this.operator = null;
    }
  
    appendNumber(number) {
      this.currentNum = `${this.currentNum}${number}`;
      this.updateDisplay();
    }
  
    clearDisplay() {
      this.currentNum = '';
      this.prevNum = '';
      this.operator = null;
      this.updateDisplay();
    }
  
    updateDisplay() {
      this.display.value = this.currentNum;
    }
  
    chooseOperator(op) {
      if (this.operator !== null || this.currentNum === '') return;
      this.operator = op;
      this.prevNum = this.currentNum;
      this.currentNum = '';
    }
  
    calculate() {
      if (this.operator === null || this.prevNum === '') return;
      const prev = parseFloat(this.prevNum);
      const curr = parseFloat(this.currentNum);
      const result = eval(`${prev} ${this.operator} ${curr}`);
      this.currentNum = `${result}`;
      this.operator = null;
      this.prevNum = '';
      this.updateDisplay();
    }
  }
  
  const display = document.getElementById('display');
  const calculator = new Calculator(display);
  
  document.getElementById('buttons').addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName !== 'BUTTON') return;
    if (target.classList.contains('num')) {
      calculator.appendNumber(target.value);
    } else if (target.classList.contains('operator')) {
      calculator.chooseOperator(target.value);
    } else if (target.id === 'equals') {
      calculator.calculate();
    } else if (target.id === 'clear') {
      calculator.clearDisplay();
    }
  });
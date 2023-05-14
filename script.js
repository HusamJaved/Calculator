 // Selecting the necessary HTML elements and storing them in variables
            const outputField = document.getElementById('outputField');
            const buttonAdd = document.getElementById('buttonAdd');
            const buttonSubtract = document.getElementById('buttonSubtract');
            const buttonMultiply = document.getElementById('buttonMultiply');
            const buttonDivide = document.getElementById('buttonDivide');
            const buttonClear = document.getElementById('buttonClear');
            const buttonEqual = document.getElementById('buttonEqual');
            
            // Variable to keep track of the current calculation
            let currentCalculation = '';
            
            // Function to update the output field with the current calculation
            function updateOutput() {
              outputField.value = currentCalculation;
            }
            
            // Function to clear the current calculation and output field
            function clear() {
              currentCalculation = '';
              updateOutput();
            }
            
            // Function to add a number to the current calculation
            function inputNumber(number) {
              currentCalculation += number.toString();
              updateOutput();
            }
            
            // Function to perform addition
            function add() {
              currentCalculation += '+';
              updateOutput();
            }
            
            // Function to perform subtraction
            function subtract() {
              currentCalculation += '-';
              updateOutput();
            }
            
            // Function to perform multiplication
            function multiply() {
              currentCalculation += '*';
              updateOutput();
            }
            
            // Function to perform division
            function divide() {
              currentCalculation += '/';
              updateOutput();
            }
            
            // Function to perform the calculation
            function calculate() {
              try {
                currentCalculation = eval(currentCalculation);
                updateOutput();
              } catch (error) {
                alert('Invalid calculation');
                clear();
              }
            }
            
            // Adding event listeners to the buttons
            buttonAdd.addEventListener('click', add);
            buttonSubtract.addEventListener('click', subtract);
            buttonMultiply.addEventListener('click', multiply);
            buttonDivide.addEventListener('click', divide);
            buttonClear.addEventListener('click', clear);
            buttonEqual.addEventListener('click', calculate);

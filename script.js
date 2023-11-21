function appendToDiplay(value) {
    var inputElement = document.querySelector('.display .input');

    if (value === 'x') {
        inputElement.value += '*'
    } else if (value === '%') {
        
        var lastPercentageIndex = inputElement.value.lastIndexOf('%')

        var currentValue = eval(inputElement.value.substring(lastPercentageIndex + 1)) || 0
        var percentage = currentValue / 100

        inputElement.value = inputElement.value.substring(0, lastPercentageIndex + 1) + percentage;
    } else if (value === '(' || value === ')') {
        inputElement.value += value
    } else {
        inputElement.value += value
    }

    lastInputWasOperator = isNaN(value)
}

function clearInput() {
    var inputElement = document.querySelector('.display .input')
    inputElement.value = ''

    lastInputWasOperator = false
}

function calculateResult() {
    var inputElement = document.querySelector('.display .input')
    var outputElement = document.querySelector('.display .output')
    var inputValue = inputElement.value

    try {
        var result = eval(inputValue)
        outputElement.value = inputValue + "=" + result; 
        inputElement.value = result
    } catch (error) {
        inputElement.value = 'Erro'
    }
}
document.querySelector('.but_op_c').addEventListener('click', clearInput);
document.querySelector('.but_op_equals').addEventListener('click', calculateResult);

var numButtons = document.querySelectorAll('.but_num')
numButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = this.value
        appendToDiplay(value)
    });
});

var opButtons = document.querySelectorAll('.but_op');
opButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = this.value
        appendToDiplay(value)
    });
});



// Variável para controlar se a última entrada foi um operador


// Função para adicionar um valor ao input
function appendToDiplay(value) {
    var inputElement = document.querySelector('.display .input');

    // Trata a multiplicação e o operador de porcentagem corretamente
    if (value === 'x') {
        inputElement.value += '*';
    } else if (value === '%') {
        // Encontra o índice do operador de porcentagem anterior
        var lastPercentageIndex = inputElement.value.lastIndexOf('%');

        // Calcula a porcentagem do valor que vem após o operador de porcentagem
        var currentValue = eval(inputElement.value.substring(lastPercentageIndex + 1)) || 0;
        var percentage = currentValue / 100;

        // Substitui o trecho após o operador de porcentagem pelo resultado
        inputElement.value = inputElement.value.substring(0, lastPercentageIndex + 1) + percentage;
    } else if (value === '(' || value === ')') {
        inputElement.value += value;
    } else {
        inputElement.value += value;
    }

    // Atualiza o status da última entrada
    lastInputWasOperator = isNaN(value);
}

// Função para limpar o input
function clearInput() {
    var inputElement = document.querySelector('.display .input');
    inputElement.value = '';

    // Reseta o status da última entrada
    lastInputWasOperator = false;
}

// Função para calcular o resultado geral
function calculateResult() {
    var inputElement = document.querySelector('.display .input');
    var outputElement = document.querySelector('.display .output');
    var inputValue = inputElement.value;

    // Use a função eval para avaliar a expressão matemática
    try {
        var result = eval(inputValue);
        outputElement.value = inputValue + "=" + result; // Adiciona a expressão ao campo de output
        inputElement.value = result;
    } catch (error) {
        inputElement.value = 'Erro';
    }
}
 function activeCaclMargin (){
    var marginCalc = document.querySelector('.math_op_buttons .button_calc')
    marginCalc.classList.add('active')
    var marginOutput = document.querySelector('.display .output')
    marginOutput.classList.add('active')
    var marginOutput2 = document.querySelector('.display .output')
    marginOutput2.classList.remove('active2')
    var marginCalc2 =document.querySelector('.calculator')
    marginCalc2.classList.remove('active2')
    var marginPorcR = document.querySelector('.math_op_buttons .button_porcentage')
    marginPorcR.classList.remove('active')
    var marginSquareR = document.querySelector('.math_op_buttons .button_square_root')
    marginSquareR.classList.remove('active')
    var marginSenR = document.querySelector('.math_op_buttons .sen_cos_tang')
    marginSenR.classList.remove('active')
}
function activePorMargin() {
    var marginPorc = document.querySelector('.math_op_buttons .button_porcentage')
    marginPorc.classList.add('active')
    var MarginClacR = document.querySelector('.math_op_buttons .button_calc')
    MarginClacR.classList.remove('active')
    var marginSquareR = document.querySelector('.math_op_buttons .button_square_root')
    marginSquareR.classList.remove('active')
    var marginSenR = document.querySelector('.math_op_buttons .sen_cos_tang')
    marginSenR.classList.remove('active')
    var marginCalc =document.querySelector('.calculator')
    marginCalc.classList.remove('active')
    var marginCalc2 =document.querySelector('.calculator')
    marginCalc2.classList.remove('active2')
    var marginOutput = document.querySelector('.display .output')
    marginOutput.classList.remove('active')
    var marginOutput2 = document.querySelector('.display .output')
    marginOutput2.classList.remove('active2')
}
function activeSquareMargin() {
    var marginSquare = document.querySelector('.math_op_buttons .button_square_root')
    marginSquare.classList.add('active')
    var marginBClacR = document.querySelector('.math_op_buttons .button_calc')
    marginBClacR.classList.remove('active')
    var marginPorcR = document.querySelector('.math_op_buttons .button_porcentage')
    marginPorcR.classList.remove('active')
    var marginSenR = document.querySelector('.math_op_buttons .sen_cos_tang')
    marginSenR.classList.remove('active')
    var marginCalc =document.querySelector('.calculator')
    marginCalc.classList.remove('active')
    var marginCalc2 =document.querySelector('.calculator')
    marginCalc2.classList.remove('active2')
    var marginOutput = document.querySelector('.display .output')
    marginOutput.classList.remove('active')
    var marginOutput2 = document.querySelector('.display .output')
    marginOutput2.classList.remove('active2')

}
function activeSenCosMargin () {
    var marginSen = document.querySelector('.math_op_buttons .sen_cos_tang')
    marginSen.classList.add('active')
    var marginOutput = document.querySelector('.display .output')
    marginOutput.classList.add('active2')
    var marginOutput = document.querySelector('.display .output')
    marginOutput.classList.remove('active')
    var marginCalc =document.querySelector('.calculator')
    marginCalc.classList.add('active2')
    var marginPorcR = document.querySelector('.math_op_buttons .button_porcentage')
    marginPorcR.classList.remove('active')
    var marginSquareR = document.querySelector('.math_op_buttons .button_square_root')
    marginSquareR.classList.remove('active')
    var MarginClacR = document.querySelector('.math_op_buttons .button_calc')
    MarginClacR.classList.remove('active')
    var marginCalc2 =document.querySelector('.calculator')
    marginCalc2.classList.remove('active')
}

document.querySelector('.math_op_buttons .button_calc').addEventListener('click',activeCaclMargin)
document.querySelector('.math_op_buttons .button_porcentage').addEventListener('click',activePorMargin)
document.querySelector('.math_op_buttons .button_square_root').addEventListener('click',activeSquareMargin)
document.querySelector('.math_op_buttons .sen_cos_tang').addEventListener('click',activeSenCosMargin)
  


// Associar as funções aos botões relevantes
document.querySelector('.but_op_c').addEventListener('click', clearInput);
document.querySelector('.but_op_equals').addEventListener('click', calculateResult);

// Associar a função appendToDisplay aos botões numéricos e operadores
var numButtons = document.querySelectorAll('.but_num');
numButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = this.value;
        appendToDiplay(value);
    });
});

var opButtons = document.querySelectorAll('.but_op');
opButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var value = this.value;
        appendToDiplay(value);
    });
});
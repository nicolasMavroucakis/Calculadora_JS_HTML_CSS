// Variável para controlar se a última entrada foi um operador


// Função para adicionar um valor ao input
function appendToDiplay(value) {
    var inputElement = document.querySelector('.display .input');

    // Trata a multiplicação e o operador de porcentagem corretamente
    if (value === 'x') {
        inputElement.value += '*'
    } else if (value === '%') {
        // Encontra o índice do operador de porcentagem anterior
        var lastPercentageIndex = inputElement.value.lastIndexOf('%')

        // Calcula a porcentagem do valor que vem após o operador de porcentagem
        var currentValue = eval(inputElement.value.substring(lastPercentageIndex + 1)) || 0
        var percentage = currentValue / 100

        // Substitui o trecho após o operador de porcentagem pelo resultado
        inputElement.value = inputElement.value.substring(0, lastPercentageIndex + 1) + percentage;
    } else if (value === '(' || value === ')') {
        inputElement.value += value
    } else {
        inputElement.value += value
    }

    // Atualiza o status da última entrada
    lastInputWasOperator = isNaN(value)
}

// Função para limpar o input
function clearInput() {
    var inputElement = document.querySelector('.display .input')
    inputElement.value = ''

    // Reseta o status da última entrada
    lastInputWasOperator = false
}

// Função para calcular o resultado geral
function calculateResult() {
    var inputElement = document.querySelector('.display .input')
    var outputElement = document.querySelector('.display .output')
    var inputValue = inputElement.value

    // Use a função eval para avaliar a expressão matemática
    try {
        var result = eval(inputValue)
        outputElement.value = inputValue + "=" + result; // Adiciona a expressão ao campo de output
        inputElement.value = result
    } catch (error) {
        inputElement.value = 'Erro'
    }
}
// Associar as funções aos botões relevantes
document.querySelector('.but_op_c').addEventListener('click', clearInput);
document.querySelector('.but_op_equals').addEventListener('click', calculateResult);

// Associar a função appendToDisplay aos botões numéricos e operadores
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



document.addEventListener('DOMContentLoaded', function() {
    // Adicionando eventos aos botões
    document.getElementById('calculate_btn').addEventListener('click', function() {
        calculateValues();
    });

    document.getElementById('clear_btn').addEventListener('click', function() {
        clearInputs();
    });
});

function calculateValues() {
    // Obtendo o valor inserido em graus
    const degreeValue = parseFloat(document.getElementById('input_value').value);

    // Calculando os valores de seno, cosseno, tangente e radianos
    const sinValue = Math.sin(degreesToRadians(degreeValue)).toFixed(4);
    const cosValue = Math.cos(degreesToRadians(degreeValue)).toFixed(4);
    const tanValue = Math.tan(degreesToRadians(degreeValue)).toFixed(4);
    const radValue = degreesToRadians(degreeValue).toFixed(4);

    // Exibindo os valores nos campos de input
    document.getElementById('sin_output').value = sinValue;
    document.getElementById('cos_output').value = cosValue;
    document.getElementById('tan_output').value = tanValue;
    document.getElementById('rad_output').value = radValue;
}

function clearInputs() {
    // Limpando os campos de input
    document.getElementById('input_value').value = '';
    document.getElementById('sin_output').value = '';
    document.getElementById('cos_output').value = '';
    document.getElementById('tan_output').value = '';
    document.getElementById('rad_output').value = '';
}

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.querySelector('.btn_calc_power');
    const clearButton = document.querySelector('.btn_clear_power');
    const inputNumber = document.querySelector('.input_power');
    const powerNumber = document.querySelector('.output_power');
    const resultDisplay = document.querySelector('.output_power_result');

    calculateButton.addEventListener('click', function() {
        const base = parseFloat(inputNumber.value);
        const exponent = parseFloat(powerNumber.value);
        const result = Math.pow(base, exponent);
        if (!isNaN(result)) {
            resultDisplay.value = result;
        } else {
            resultDisplay.value = 'Invalid input';
        }
    });

    clearButton.addEventListener('click', function() {
        inputNumber.value = '';
        powerNumber.value = '';
        resultDisplay.value = '';
    });
});

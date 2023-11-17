document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.querySelector('.button_calc_square');
    const clearButton = document.querySelector('.btn_clar_square');
    const inputNumber = document.querySelector('.input_square');
    const resultField = document.querySelector('.res_square');

    calculateButton.addEventListener('click', function() {
        const inputValue = parseFloat(inputNumber.value);

        if (!isNaN(inputValue) && inputValue >= 0) {
            const squareRoot = Math.sqrt(inputValue);
            resultField.value = squareRoot.toFixed(3);
        } else {
            resultField.value = 'Invalid input';
        }
    });

    clearButton.addEventListener('click', function() {
        inputNumber.value = '';
        resultField.value = '';
    });
});

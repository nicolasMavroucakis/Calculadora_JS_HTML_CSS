document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.querySelector('.button_porc');
    const clearButton = document.querySelector('.clear_por_button');
    const inputFields = document.querySelectorAll('.porInput');
    const resultField = document.querySelector('.res');

    calculateButton.addEventListener('click', function() {
        const inputValue1 = parseFloat(inputFields[0].value);
        const inputValue2 = parseFloat(inputFields[1].value);

        if (!isNaN(inputValue1) && !isNaN(inputValue2)) {
            const result = (inputValue1 * inputValue2) / 100;
            resultField.value = result;
        } else {
            resultField.value = 'Invalid input';
        }
    });

    clearButton.addEventListener('click', function() {
        inputFields.forEach(function(input) {
            input.value = '';
        });
        resultField.value = '';
    });
});
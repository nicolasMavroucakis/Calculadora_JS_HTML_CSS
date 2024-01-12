

function show_sen_cos_tang() {
    if (screen_sen_cos_tang.classList.contains('active')) {
        math_op_buttons.classList.remove('active')
        screen_sen_cos_tang.classList.remove('active')
    } else {
        screen_sen_cos_tang.classList.add('active')
        math_op_buttons.classList.add('active')
    }
}
function show_square_root() {
    if (screen_square_root.classList.contains('active')) {
        math_op_buttons.classList.remove('active')
        screen_square_root.classList.remove('active')
    } else {
        screen_square_root.classList.add('active')
        math_op_buttons.classList.add('active')
    }
}
function show_porcentage_screen() {
    if (screen_porcentage.classList.contains('active')) {
        math_op_buttons.classList.remove('active')
        screen_porcentage.classList.remove('active')
    } else {
        screen_porcentage.classList.add('active')
        math_op_buttons.classList.add('active')
    }
}
function show_calculator_screen() {
    if (screen_calc.classList.contains('active')) {
        screen_calc.classList.remove('active')
        math_op_buttons.classList.remove('active')
    } else {
        screen_calc.classList.add('active')
        math_op_buttons.classList.add('active')
    }
}
function show_screen_power(){
    if (screen_power.classList.contains('active')) {
        screen_power.classList.remove('active')
        math_op_buttons.classList.remove('active')
    } else {
        screen_power.classList.add('active')
        math_op_buttons.classList.add('active')
    }
}


const button_calc = document.querySelector('.math_op_buttons .button_calc')
const button_porcentage = document.querySelector('.math_op_buttons .button_porcentage')
const button_square_root = document.querySelector('.math_op_buttons .button_square_root')
const button_sen = document.querySelector('.math_op_buttons .sen_cos_tang')
const button_power =document.querySelector('.math_op_buttons .power_button')
const math_op_buttons = document.querySelector('.math_op_buttons')

const screen_calc =  document.querySelector('.every_thing .calculator')
const screen_square_root =  document.querySelector('.every_thing .square_root_screen')
const screen_porcentage = document.querySelector('.every_thing .porcetage_screen')
const screen_sen_cos_tang = document.querySelector('.every_thing .sen_cos_tang_screen')
const screen_power = document.querySelector('.every_thing .power')

document.querySelector('.math_op_buttons .sen_cos_tang').addEventListener('click',show_sen_cos_tang)
document.querySelector('.math_op_buttons .button_square_root').addEventListener('click',show_square_root)
document.querySelector('.math_op_buttons .button_porcentage').addEventListener('click',show_porcentage_screen)
document.querySelector('.math_op_buttons .button_calc').addEventListener('click',show_calculator_screen)
document.querySelector('.math_op_buttons .power_button').addEventListener('click',show_screen_power)
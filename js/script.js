"use strict";

function plus () {
    var num1 = document.getElementById('first_num').value;
    num1 = parseInt(num1);
    var num2 = document.getElementById('secon_num').value;
    num2 = parseInt(num2);
    var result = num1 + num2;
    console.log (result);

    document.getElementById('result').innerHTML = result;
    
};

function minus () {
    var num1 = document.getElementById('first_num').value;
    num1 = parseInt(num1);
    var num2 = document.getElementById('secon_num').value;
    num2 = parseInt(num2);
    var result = num1 - num2;
    console.log (result);

    document.getElementById('result').innerHTML = result;

}

function multiple () {
    var num1 = document.getElementById('first_num').value;
    num1 = parseInt(num1);
    var num2 = document.getElementById('secon_num').value;
    num2 = parseInt(num2);
    var result = num1 * num2;
    console.log (result);

    document.getElementById('result').innerHTML = result;

}

function divide () {
    var num1 = document.getElementById('first_num').value;
    num1 = parseInt(num1);
    var num2 = document.getElementById('secon_num').value;
    num2 = parseInt(num2);

    if (num1 === 0 || num2 === 0) {
        alert('На ноль делить низя');
    } else {
        var result = num1 / num2;
        console.log (result);
    }
    
    document.getElementById('result').innerHTML = result;
    
}


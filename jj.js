// Variables declared inside a { } block cannot be accessed from outside the block:

function calci() {
    var num1 = parseFloat(document.getElementById('d_a').value);
    var num2 = parseFloat(document.getElementById('d_b').value);
    var operator = document.getElementById('d_c').value;
    var result;
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            break;
    }
    document.getElementById('d_result').innerHTML = result;

    // document.write(result); this will replace everything with what we are writing here  

    // window.alert("answer is " + result);  pop up comes with answer
}
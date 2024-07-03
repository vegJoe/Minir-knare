console.log("Hello!")

var first = parseInt(prompt("Insert first number"));

var second = parseInt(prompt("Insert second number"));

let mathChoice = prompt("Do you want to +, -, * or / the numbers?");

calculator(mathChoice);

function calculator(mathChoice) {

    switch(mathChoice) {
    case "+":
        {
            console.log(first + second);
        }
        break;
    case "-":
        {
            console.log(first - second);
        }
        break;
    case "*":
        {
            console.log(first * second);
        }
        break;
    case "/":
        {
            console.log(first / second);
        }
        break;
    default:
        console.log("Could not calculate");
        break;
    }
}

console.log("Goodbye!")





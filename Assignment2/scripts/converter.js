function converter(){
    let num1 = prompt('Enter the first number:');
    let num2 = prompt('Enter the second number:');
    let operation = prompt('Select the operation: 1.Addition, 2.Substraction, 3.Multiplication, 4.Division.');

    if(operation ===1){
        let result = Number(num1) + Number(num2);
    document.getElementById("results").innerHTML= '<p>The answer is: ${result} </p>';
    }
    if(operation ===2){
        let result = Number(num1) - Number(num2);
    document.getElementById("results").innerHTML= '<p>The answer is: ${result} </p>';
    }
    if(operation ===3){
        let result = Number(num1) * Number(num2);
    document.getElementById("results").innerHTML= '<p>The answer is: ${result} </p>';
    }
    if(operation ===4){
        let result = Number(num1) / Number(num2);
    document.getElementById("results").innerHTML= '<p>The answer is: ${result} </p>';
    }
}
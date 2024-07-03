console.log("Hello");
function convertTemp(){
    let temperature = prompt('Choose conversion:\n1. Celsius to Fahrenheit \n2. Fahrenheit to Celsius');

    if (temperture ==='1'){
        let temperature = prompt('Enter the temperature in Celsius:');
        let fahrenheit = (temperature * 9/5) + 32;
        document.getElementById('tempResult').innerHTML = <p>The conversion of ${temperature}.C is ${fahrenheit}.F</p>;
    }
    else if (temperature ==='2'){
        let temperature = prompt('Enter the temperature in Fahrenheit:');
        let celsius = (temperature - 32) * 5/9;
        document.getElementById('tempResult').innerHTML = <p>The conversion of ${temperature}.F is ${celsius}.C</p>;
    }
    else {
        document.getElementById('tempResult').innerHTML = <p>Invalid selection.</p>;
    }
}
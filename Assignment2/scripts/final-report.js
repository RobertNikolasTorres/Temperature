console.log("Hello");

function convertTemperatureRange() {
    let startValue = prompt("Enter starting temperature:");
    let endValue = prompt("Enter ending temperature:");
    let scale = prompt("Enter scale C or F:");

    for (let temp = startValue; temp <= endValue; temp++) {
        if (scale === "C") {
            let fahrenheit = ((temp * 9) / 5) +32;
            document.write(`<p>${temp}C is equal to ${fahrenheit} F.</p>`);
        }
        else if(scale === "F") {
            let celsius =((temp - 32) * 5) / 9;
            document.write(`<p>${temp}F is equal to ${celsius.toFixed(2)} C.</p>`);
        }
        else {
            document.write(`<p>Invalid scale, Please enter C or F.</p>`);
        }
    }
}
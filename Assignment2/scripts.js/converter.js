function converter(){
    
    console.log("Converter script");
    let temperature = prompt("Enter temperature in (Celsius)");
    let f = (temperature * 9/5) + 32;
    document.getElementById("tempResult").innerHTML=`<p> ${temperature} C to ${f} F </p>`;
}
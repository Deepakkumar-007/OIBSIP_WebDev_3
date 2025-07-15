function convertTemp(){
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromTempUnit = document.getElementById('fromTempUnit').value ;
    const toTempUnit = document.getElementById('toTempUnit').value;

    if(isNaN(inputTemp)){
        document.getElementById('result').textContent='Please enter a valid number';
        return;
    }
    let celsius ; 
    // convert from target unit to celsius.
    switch(fromTempUnit){
        case 'celsius' :
            celsius = inputTemp;
            break;
        case 'fahrenheit' :
            celsius = (inputTemp - 32 )* 5/9 ;
            break;
        case 'kelvin' :
            celsius = inputTemp -273.15;
            break;
    }

    // convert from celsius to target unit.
    let result ;
    switch(toTempUnit){
        case 'celsius' :
            result = celsius;
            break;
        case 'fahrenheit' :
            result = (celsius * 9/5) + 32;
            break;
        case 'kelvin':
            result = celsius + 273.15 ;
            break;
    }

    document.getElementById('result').textContent = 
    `${inputTemp}° ${fromTempUnit.charAt(0).toUpperCase()} =
    ${result.toFixed(2)}° ${toTempUnit.charAt(0).toUpperCase()}`;
}
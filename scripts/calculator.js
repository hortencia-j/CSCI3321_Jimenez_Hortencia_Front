function updateDisplay(newValue){
    //Find the display box
    var d = document.getElementById('display');
    switch (newValue){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            d.innerHTML += newValue;
            break;
        case 'AC':
            d.innerHTML = '';
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            //if display empty
            if (d.innerHTML == ''){
                break;
            }
            //if display value end with other op
            else if (d.innerHTML.endsWith == '+'||d.innerHTML.endsWith == '/'|| d.innerHTML.endsWith =='*'|| d.innerHTML.endsWith =='-'){
                break;
            }
            else { 
                d.innerHTML += newValue;
                break;
            }
        case '=':
            if (d.innerHTML == ''){
                break;
            }
            //if display not empty
            else{
                d.innerHTML = eval(d.innerHTML);
            break;
            }
    }
}

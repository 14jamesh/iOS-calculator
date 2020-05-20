let buffer = ""; 
let current = ""; //current numbers displayed on screen
let operator = "";  //operator clicked by user
let total = 0; //total as user continues performing calculations 
displayBox = document.querySelector('.calc-text-area'); //the display area for the user input and result 

document.querySelector('.calc-body').addEventListener('click', (event) => {
    switch(true){ //check what button the user clicked 
        case event.target.className.includes('AC'): //if clear button 
            reset(); 
            break; 
        case event.target.className.includes('operations'): //if an operations button (orange-right side column)
            if(event.target.innerText === '='){ //not sure about this right now
                displayBox.innerText = total;
            }else{
                calcCurrent(parseFloat(event.target.innerText));
                setOperator(event.target.innerText);
                setBuffer(); //this is right it should be done last 
            }
            break;
        case event.target.className.includes('number'): //if a number button
            setCurrent(event.target.innerText);
            break;
    }
});

function setCurrent(input){ //current display on calculator
    current += input;
    displayBox.innerText = current;
}

function setOperator(input){ //set the operator the user clicks on 
    switch(input){
        case '÷':
            operator = 'divide'
            break;
        case '×':
            operator = 'multiply'
            break;
        case '-':
            operator = 'minus'
            break;
        case '+':
            operator = 'plus'
            break;
    }
}

function setBuffer(){
    buffer = current;
    current = "";
}

function calcCurrent(input){
    if(buffer == ""){ //if it is the first time clicking an operation, so buffer hasn't been set before  
        total = input; //empty the current input into the total 
    }else{ //else we can perform arithmetic because buffer variable is holding a valid number 
        switch(operator){
            case 'divide':
                break;
            case 'multiply':
                break;
            case 'minus':
                break;
            case 'plus':
                break;
        }
    }
}

function reset(){ 
    displayBox.innerText = 0;
    buffer = "";
    current = "";
    total = 0;
}

function init(){ //on launch clear fields 
    reset();
}
init();


//1. 55 (current)
//2. + --> current to another variable
//3. 3 (current)
//4. 
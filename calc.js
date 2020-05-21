let current = ""; //current numbers displayed on screen [55]
let operator = "";  //operator clicked by user [plus]
let total = 0; //total as user continues performing calculations 
displayBox = document.querySelector('.calc-text-area'); //the display area for the user input and result 

document.querySelector('.calc-body').addEventListener('click', (event) => {
    switch(true){ //check what button the user clicked 
        case event.target.className.includes('AC'): //if clear button 
            reset(); 
            break; 
        case event.target.className.includes('operations'): //if an operations button (orange-right side column)
            if(event.target.innerText === '='){
                calcCurrent(); 
                displayBox.innerText = total;
            }else{
                setOperator(event.target.innerText);
                calcCurrent();
                clearCurrent();
                displayBox.innerText = total;
                //setBuffer(); //this is right it should be done last 
            }
            break;
        case event.target.className.includes('number'): //if a number button
            setCurrent(event.target.innerText);
            break;
    }
});

function setCurrent(input){ //current display on calculator and set variable current
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

function clearCurrent(){
    current = "";
}


function calcCurrent(){
    if(total === 0){//if it is the first time clicking an operation, so buffer hasn't been set before  
        total = parseInt(current);//empty the current input into the total 
    }else{ //else we can perform arithmetic because buffer variable is holding a valid number 
        switch(operator){
            case 'divide':
                total /= parseInt(current);
                break;
            case 'multiply':
                total *= parseInt(current);
                break;
            case 'minus':
                total -= parseInt(current); 
                break;
            case 'plus':
                total += parseInt(current);
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
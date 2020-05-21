let current; //current numbers displayed on screen [55]
let operator;  //operator clicked by user [plus]
let total; //total as user continues performing calculations 
displayBox = document.querySelector('.calc-text-area'); //the display area for the user input and result 

document.querySelector('.calc-body').addEventListener('click', (event) => {
    switch(true){ //check what button the user clicked 
        case event.target.className.includes('AC'): //in the case of the clear button 
            reset(); 
            break; 
        case event.target.className.includes('operations'): //in the case of an operations button 
            if(event.target.innerText === '='){ //if the operations button is the equal sign 
                calcCurrent(); 
                displayBox.innerText = Math.floor(total);
            }else{
                if(current != ""){
                    setOperator(event.target.innerText); //else it is an arithmetic operation 
                    calcCurrent();
                    clearCurrent();
                    displayBox.innerText = Math.floor(total);
                }
            }
            break;
        case event.target.className.includes('number'): //in the case that it is a number being clicked  
            setCurrent(event.target.innerText);
            break;
    }
});

function setCurrent(input){//current display on calculator and set variable current
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
    if(total.length === 0){//if it is the first time clicking an operation, so total hasn't been set before  
        total = parseInt(current);//empty the current input into the total ***** AND sets it to a number from typeof(string) on init  ******
    }else{ //else we can perform arithmetic because total variable is now holding a valid integer of type number 
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
    total = "";
}

function init(){ //on launch clear fields 
    reset();
}
init();


//1. 55 (current)
//2. + --> current to another variable
//3. 3 (current)
//4. 
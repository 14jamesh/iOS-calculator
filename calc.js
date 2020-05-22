let total = ""; 
let current = ""; 
let prevOperator = ""; //variable will either hold a plus, minus, multiply, divide or empty string. It inits as a space to pass a fringe case on line 11. 
let clickedEqual = false;
let displayBox = document.querySelector('.calc-text-area');

document.querySelector('.calc-body').addEventListener('click', (e) =>{
    
    switch(true){

        case e.target.className.includes('clr') && (clickedEqual == false): //if user hasn't clicked on = yet (no character clear allowed after = )
            if(current.length === 1 ){ //if there is only one character as an input, clear it to 0 because that is the last char being deleted. 
                current = "0"; 
                displayBox.innerText = current;
            }else if(total != "" && current == ""){
                //if current has been reset it becomes an empty string ("") --> this means the user is in the middle of performing operations about to input a new value (See line 38 and 39) To prevent an accidental click on clear this case is here to do nothing. 
            }else{ //else if it is a string of digits delete them one by one with each click.  
                current = current.slice(0, current.length -1);
                displayBox.innerText = current;
            }
            break;

        case e.target.className.includes('AC'): //if Clear is clicked 
            reset(); //reset all variables and what is displayed
            displayBox.innerText = "0"; 
            break;

        case e.target.className.includes('number'): //if a number is clicked
            setCurrent(e.target.innerText); //just update the current variable
            displayBox.innerText = current; //display the current variable 
            break;

        case e.target.className.includes('operations'): //if an operation is clicked
            if(current !== "" || clickedEqual == true){ 
            console.log(total);
            // 1. if (current != "") -->  this is to ensure the user has inputted a new number prior to clicking on operation again, otherwise calcCurrent will try to perform arithmetic with an empty string = NaN     
            //2. OR clickedEqual == true --> if the user clicks on equal sign the current variable resets to an empty string (line 39), but I still need them to come in here on the *NEXT* operational click, so their next operator can be set on line 45. 
                calcCurrent();
                resetCurrent();
                if(total % 1 != 0){
                    displayBox.innerText = total.toFixed(2);
                }else{
                    displayBox.innerText = total;
                }
                setPrevOperator(e.target.innerText);
                break;
            }           
    }
});
function setCurrent(input){
    current += input;
}
function setPrevOperator(input){
    switch(input){
        case '÷':
            prevOperator = 'divide';
            break;
        case '×':
            prevOperator = 'multiply';
            break;
        case '+':
            prevOperator = 'plus';
            break;
        case '-':
            prevOperator = 'minus';
            break;
        case '=':
            clickedEqual = true;
            prevOperator = "";
    }
}
function calcCurrent(){
    if(total.length === 0){//if it is the first input into the calculator 
        total = parseInt(current); //set total equal to the value just inputted 
    }else{

        current = Math.floor(parseInt(current));

        switch(prevOperator){
            case 'divide':
                total /= current;
                break;
            case 'multiply':
                total *= current;
                break;
            case 'plus':
                total += current;
                break;
            case 'minus':
                total -= current;
                break;
        }
    }
}
function resetCurrent(){
    current = "";
}
function reset(){
    total = "";
    current = "";
    previousOperator = false;
}

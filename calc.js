let total = ""; 
let current = ""; 
let prevOperator = ""; 
let displayBox = document.querySelector('.calc-text-area');
document.querySelector('.calc-body').addEventListener('click', (e) =>{

    switch(true){
        case e.target.className.includes('AC'): //if AC is clicked 
            reset(); //reset all variables and what is displayed
            displayBox.innerText = 0; 
            break;

        case e.target.className.includes('number'): //if a number is clicked
            setCurrent(e.target.innerText); //just update the current variable
            displayBox.innerText = current; //display the current variable 
            break;
            
        case e.target.className.includes('operations'): //if an operation is clicked
            if(current != "" || prevOperator == ""){ 
            // 1. if (current != "") -->  this is to ensure the user has inputted a new number prior to clicking on operation again, otherwise calcCurrent will try to perform arithmetic with an empty string = NaN     
            //2. OR prevOperator == "" --> if the user clicks on equal sign the prevOperator variable and current variable resets to an empty string (line 22 and 23), but I still need them to come in here on the *NEXT* operational click, so their next operator can be set on line 29. 
            //Line 19 is a bit confusing but I can't think of a better implementation right now. It works so meh. 
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
                console.log(total);
                console.log(current);
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
    previousOperator = "";
}

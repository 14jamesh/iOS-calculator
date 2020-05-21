let total = ""; 
let current = ""; 
let prevOperator = ""; 
let displayBox = document.querySelector('.calc-text-area');

document.querySelector('.calc-body').addEventListener('click', (e) =>{

    switch(true){
        case e.target.className.includes('AC'): //if AC is clicked 
            reset();
            displayBox.innerText = 0;
            break;

        case e.target.className.includes('number'): //if a number is clicked
            setCurrent(e.target.innerText);
            displayBox.innerText = current;
            break;

        case e.target.className.includes('operations'): //if an operation is clicked
            if(current != ""){
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
    }
}

function calcCurrent(){
    if(total.length === 0){
        total = parseInt(current);
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
    previousOperator = "";
}

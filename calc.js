let total = ""; //5
let current = ""; //"2"
let prevOperator = ""; //
let displayBox = document.querySelector('.calc-text-area');

document.querySelector('.calc-body').addEventListener('click', (e) =>{

    switch(true){
        case e.target.className.includes('AC'): //resets the calculator
            reset();
            displayBox.innerText = 0;
            break;
        case e.target.className.includes('number'): //updates current as user clicks
            setCurrent(e.target.innerText);
            displayBox.innerText = current;
            break;
        case e.target.className.includes('operations'):
            if(current != ""){
                calcCurrent();
                resetCurrent();
                displayBox.innerText = total;
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

// 10 * 7 + 2 / 4 (pass);

// 8 / * - + 2 = 4;

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

//1. current --> total 
//2. 
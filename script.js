const buttons = document.querySelectorAll(`.btn`);
const btnAc = document.querySelector('.btnAc');
const text = document.querySelector(`.text`);
const btnEqual = document.querySelector(`.btnEqual`);

let num1 = ``, num2 = ``, operator = ``;
let value;

buttons.forEach(button => {
    button.addEventListener(`click`, ()=>{
        const symbols = `+-*/%.`;
        value = button.value;

        if(symbols.includes(value)){
           if(num1 == ``){
            num1 = value;
            text.textContent = value;
           }
           else{
            operator = value;
            text.textContent = value;
           }
        }
        else{
            if(operator == ``){
                num1 += value;
                text.textContent = num1;
            }
            else{
                num2 += value;
                text.textContent = num2;
            }
        }

        console.log(`num1 - ${num1}`);
        console.log(`num2 - ${num2}`);
        console.log(`op - ${operator}`);
    })
})





btnEqual.addEventListener(`click`, ()=>{
    let result;
    if(num2 === ``){
        result = `err`;
    }
    else{
        switch(operator){
            case `+`:
                result = (Number(num1) + Number(num2));
                break;
            case `-`:
                result = (Number(num1) - Number(num2));
                break; 
            case `*`:
                result = (Number(num1) * Number(num2));
                break;
            case `/`:
                result = (Number(num1) / Number(num2));
                break;
            case `%`:
                result = (Number(num1) % Number(num2));
                break;
            
        }
    }
    text.textContent = result;
    num1 = result;
    num2 = ``;
    operator = ``;
});
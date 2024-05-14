const buttons = document.querySelectorAll(`.btn`);
const btnAc = document.querySelector('.btnAc');
const text = document.querySelector(`.text`);
const btnEqual = document.querySelector(`.btnEqual`);
const btnGit = document.querySelector(`.btnGit`);

let num1 = ``, num2 = ``, operator = ``;
let value;

buttons.forEach(button => {
    button.addEventListener(`click`, ()=>{
        const symbols = `+-*/%`;
        value = button.value;

        if(symbols.includes(value)){
            if(num2 != ``){
                result()
            }
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
    })
})

function result(){
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
};

btnEqual.addEventListener(`click`, ()=>{
    result();
});

btnAc.addEventListener(`click`, () => {
    text.textContent = 0;
    num1 = ``;
    num2 = ``;
    operator = ``;
})

btnGit.addEventListener(`click`, ()=>{
    window.open(`https://github.com/notsanta20/calculator`, `_blank`);
})
let firstStep = document.querySelector('.firstStep');
let secondStep = document.querySelector('.secondStep');
let thirdStep = document.querySelector('.thirdStep');
let fourStep = document.querySelector('.fourStep');
let fiveStep = document.querySelector('.fiveStep');
let sixStep = document.querySelector('.sixStep');
let sevenStep = document.querySelector('.sevenStep');
let eightStep = document.querySelector('.eightStep');
let endStep = document.querySelector('.endStep');
let constantQuestion = document.querySelector('.constant__question');
let constantStep = document.querySelector('.constant__step');
let butBehind = document.querySelector('.butBehind');
let butForward = document.querySelector('.butForward');

let inputFirstSelf = document.getElementById('inputFirstSelf');
let inputFirstWife = document.getElementById('inputFirstWife');
let inputFirstSubling = document.getElementById('inputFirstSubling');
let inputFirstCollegue = document.getElementById('inputFirstCollegue');
let inputFirstChild = document.getElementById('inputFirstChild');
let inputFirstOther = document.getElementById('inputFirstOther');

// firstStep.style.display = 'none';
secondStep.style.display = 'none';
thirdStep.style.display = 'none';
fourStep.style.display = 'none';
fiveStep.style.display = 'none';
sixStep.style.display = 'none';
sevenStep.style.display = 'none';
eightStep.style.display = 'none';
endStep.style.display = 'none';

// butForward.style.display ='disable';
butBehind.style.display ='none';

let x=1;
let n=9;

constantStep.innerText = `Шаг ${x} из ${n}`
constantQuestion.innerText = 'Для кого вы ищете учебное заведение?'


butForward.disabled = true;
butForward.style.cursor = 'default';

inputFirstSelf.addEventListener('click', () => isChecked());
inputFirstWife.addEventListener('click', () => isChecked());
inputFirstSubling.addEventListener('click', () => isChecked());
inputFirstCollegue.addEventListener('click', () => isChecked());
inputFirstChild.addEventListener('click', () => isChecked());
inputFirstOther.addEventListener('click', () => isChecked());

function isChecked () {
    butForward.disabled = false;
    butForward.style.cursor = 'pointer';
}


butForward.addEventListener('click' , () => forwardStep());
butBehind.addEventListener('click' , () => behindStep());

function forwardStep () {
    
    if(firstStep.style.display !== 'none' 
    && butForward.disabled == false
    ) {
        firstStep.style.display = 'none';
        secondStep.style.display = 'flex';
        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
    }
    
    
}

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

let thirdInputOne = document.getElementById('thirdInputOne');
let thirdInputTwo = document.getElementById('thirdInputTwo');
let thirdInputThree = document.getElementById('thirdInputThree');
let thirdInputFour = document.getElementById('thirdInputFour');
let thirdInputFive = document.getElementById('thirdInputFive');
let thirdInputSix = document.getElementById('thirdInputSix');

let fourInputOne = document.getElementById('fourInputOne');
let fourInputTwo = document.getElementById('fourInputTwo');
let fourInputThree = document.getElementById('fourInputThree');

let fiveInputOne = document.getElementById('fiveInputOne');
let fiveInputTwo = document.getElementById('fiveInputTwo');
let fiveInputThree = document.getElementById('fiveInputThree');

let sixInputOne = document.getElementById('sixInputOne');
let sixInputTwo = document.getElementById('sixInputTwo');
let sixInputThree = document.getElementById('sixInputThree');

let eightInputOne= document.getElementById('eightInputOne');
let eightInputTwo= document.getElementById('eightInputTwo');
let eightInputThree= document.getElementById('eightInputThree');
let eightInputFour= document.getElementById('eightInputFour');
let eightInputFive= document.getElementById('eightInputFive');

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

thirdInputOne.addEventListener('click', () => isChecked());
thirdInputTwo.addEventListener('click', () => isChecked());
thirdInputThree.addEventListener('click', () => isChecked());
thirdInputFour.addEventListener('click', () => isChecked());
thirdInputFive.addEventListener('click', () => isChecked());
thirdInputSix.addEventListener('click', () => isChecked());

fourInputOne.addEventListener('click', () => isChecked());
fourInputTwo.addEventListener('click', () => isChecked());
fourInputThree.addEventListener('click', () => isChecked());

fiveInputOne.addEventListener('click', () => isChecked());
fiveInputTwo.addEventListener('click', () => isChecked());
fiveInputThree.addEventListener('click', () => isChecked());

sixInputOne.addEventListener('click', () => isChecked());
sixInputTwo.addEventListener('click', () => isChecked());
sixInputThree.addEventListener('click', () => isChecked());

eightInputOne.addEventListener('click', () => isChecked());
eightInputTwo.addEventListener('click', () => isChecked());
eightInputThree.addEventListener('click', () => isChecked());
eightInputFour.addEventListener('click', () => isChecked());
eightInputFive.addEventListener('click', () => isChecked());


function isChecked () {
    butForward.disabled = false;
    butForward.style.cursor = 'pointer';
}


butForward.addEventListener('click' , () => forwardStep());
butBehind.addEventListener('click' , () => behindStep());

function forwardStep () {

    butBehind.style.display = '';
    
    if(firstStep.style.display !== 'none') {
        
        firstStep.style.display = 'none';
        secondStep.style.display = 'flex';
        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
        constantQuestion.innerText = 'В каком городе планируете поступать?'
  
    } else
    if(secondStep.style.display !== 'none') {
        
        secondStep.style.display = 'none';
        thirdStep.style.display = '';
        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
        butForward.disabled = true;
        butForward.style.cursor = 'default';
        constantQuestion.innerText = 'Какое образование уже есть?'
    } 
    else
    if(thirdStep.style.display !== 'none') {
        
        thirdStep.style.display = 'none';
        fourStep.style.display = '';

        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
        butForward.disabled = true;
        butForward.style.cursor = 'default';

        constantQuestion.innerText = 'Куда планируете поступать?'
    }  else
    if(fourStep.style.display !== 'none') {
        
        fourStep.style.display = 'none';
        fiveStep.style.display = '';

        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
        butForward.disabled = true;
        butForward.style.cursor = 'default';

        constantQuestion.innerText = 'Какую форму обучения предпочитаете?'
    }  else
    if(fiveStep.style.display !== 'none') {
        
        fiveStep.style.display = 'none';
        sixStep.style.display = '';

        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
        butForward.disabled = true;
        butForward.style.cursor = 'default';

        constantQuestion.innerText = 'Рассматриваете платное обучение?'
    } 
    else
    if(sixStep.style.display !== 'none') {
        
        sixStep.style.display = 'none';
        sevenStep.style.display = '';

        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
        // butForward.disabled = true;
        // butForward.style.cursor = 'default';

        constantQuestion.innerText = 'Какая специальность интересует?'
    } else
    if(sevenStep.style.display !== 'none') {
        
        sevenStep.style.display = 'none';
        eightStep.style.display = '';

        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
        butForward.disabled = true;
        butForward.style.cursor = 'default';

        constantQuestion.innerText = 'Как скоро планируете поступать?'
    } 
    else
    if(eightStep.style.display !== 'none') {
        
        eightStep.style.display = 'none';
        endStep.style.display = '';

        x+=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
   

        constantQuestion.innerText = 'Ваша подборка готова! 🥳 Куда нам отправить её?'
        butForward.style.display = 'none';
        butBehind.style.display = 'none';

    } 
    
    
}
function behindStep () {
    if(eightStep.style.display !== 'none') {
        
        eightStep.style.display = 'none';
        sevenStep.style.display = '';

        x-=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
   

        constantQuestion.innerText = 'Какая специальность интересует?'
        // butForward.style.display = 'none';
        // butBehind.style.display = 'none';

    } else 
    if(sevenStep.style.display !== 'none') {
        
        sevenStep.style.display = 'none';
        sixStep.style.display = '';

        x-=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
   

        constantQuestion.innerText = 'Рассматриваете платное обучение?'
        butForward.disabled = true;
        butForward.style.cursor = 'default';
        // butBehind.style.display = 'none';

    } else 
    if(sixStep.style.display !== 'none') {
        
        sixStep.style.display = 'none';
        fiveStep.style.display = '';

        x-=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
   

        constantQuestion.innerText = 'Какую форму обучения предпочитаете?'
        butForward.disabled = true;
        butForward.style.cursor = 'default';
        // butBehind.style.display = 'none';

    } else 
    if(fiveStep.style.display !== 'none') {
        
        fiveStep.style.display = 'none';
        fourStep.style.display = '';

        x-=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
   

        constantQuestion.innerText = 'Куда планируете поступать?'
        butForward.disabled = true;
        butForward.style.cursor = 'default';
        // butBehind.style.display = 'none';

    } 
    else 
    if(fourStep.style.display !== 'none') {
        
        fourStep.style.display = 'none';
        thirdStep.style.display = '';

        x-=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
   

        constantQuestion.innerText = 'Какое образование уже есть?'
        butForward.disabled = true;
        butForward.style.cursor = 'default';
        // butBehind.style.display = 'none';

    } else 
    if(thirdStep.style.display !== 'none') {
        
        thirdStep.style.display = 'none';
        secondStep.style.display = '';

        x-=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
   

        constantQuestion.innerText = 'В каком городе планируете поступать?'
        // butForward.style.display = 'none';
        // butBehind.style.display = 'none';

    } else 
    if(secondStep.style.display !== 'none') {
        
        secondStep.style.display = 'none';
        firstStep.style.display = '';

        x-=1;
        constantStep.innerText = `Шаг ${x} из ${n}`
   

        constantQuestion.innerText = 'Для кого вы ищете учебное заведение?'
        // butForward.style.display = 'none';
        butBehind.style.display = 'none';

    } 
}


window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
      document.body.classList.add('loaded');
      document.body.classList.remove('loaded_hiding');
    }, 500);
  }
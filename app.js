let firstStep = document.querySelector('.firstStep');
let secondStep = document.querySelector('.secondStep');
let thirdStep = document.querySelector('.thirdStep');
let fourStep = document.querySelector('.fourStep');
let fiveStep = document.querySelector('.fiveStep');
let sixStep = document.querySelector('.sixStep');
let sevenStep = document.querySelector('.sevenStep');
let eightStep = document.querySelector('.eightStep');
let nineStep = document.querySelector('.nineStep');
let constantQuestion = document.querySelector('.constant__question');
let constantStep = document.querySelector('.constant__step');

firstStep.style.display = 'none';
secondStep.style.display = 'none';
thirdStep.style.display = 'none';
fourStep.style.display = 'none';
fiveStep.style.display = 'none';
sixStep.style.display = 'none';
sevenStep.style.display = 'none';
eightStep.style.display = 'none';
// nineStep.style.display = 'none';
x=2;
n=9;

constantQuestion.innerText = 'В каком городе планируете поступать?'
constantStep.innerText = `Шаг ${x}  из ${n}`


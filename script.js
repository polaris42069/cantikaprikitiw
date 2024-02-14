

const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = "I love you!!!";
    gif.src = "valpic2.gif"
    
})

noBtn.addEventListener('click', ()=>{
    const nobBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - nobBtnRect.width;
    const maxY = window.innerHeight - nobBtnRect.height;

    const randomX = Math.floor( Math.random() * maxX);
    const randomY = Math.floor( Math.random() * maxY);

    noBtn.style.left = randomX +'px';
    noBtn.style.top = randomY + 'px';
})
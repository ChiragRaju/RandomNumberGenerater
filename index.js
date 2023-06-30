const number =document.getElementById('number');
const generatebutton = document.getElementById('generatebutton');

const randomGenerator=()=>{
    const random=Math.floor(Math.random()*100+1);
    number.textContent = random;

};
generatebutton.addEventListener('click',randomGenerator);
randomGenerator();
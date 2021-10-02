// header
const header = document.getElementById('header');
console.log(header);

header.addEventListener('mouseover',()=>{
    header.style.color='violet';
});
header.addEventListener('mouseleave',()=>{
    header.style.color='black';
});
//nav section
const nav = document.getElementById('nav');
const burger = document.getElementById('burger');

burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
});
let menu=document.querySelector("#menu");
let nav=document.querySelector("nav");
let container=document.querySelector(".header");
let x=document.querySelector("#x");

menu.onclick= ()=>{
container.classList.add('active');
menu.style.display='none';
x.style.display='block';
}
x.onclick=()=>{
container.classList.remove('active');
x.style.display='none';
}



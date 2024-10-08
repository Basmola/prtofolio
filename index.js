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

// let sections=document.querySelectorAll('section');
// let navLinks=document.querySelectorAll('header nav ul a');

// window.onscroll =()=>{
//     sections.forEach(sec=>{
//         let top=window.scrollY;
//         let offset=sec.offsectTop -150;
//         let height=sec.offsetHeight;
//         let id=sec.getAttribute;
//         if(top >=offset && top <offset +height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav ul a[href*=' + id +']').classList.add('active');
//             });
//         }
//     });
// }
// menu.onclick =() =>{
// menu.classList.toggle('bx-x');
// nav.classList.toggle('active');
// }



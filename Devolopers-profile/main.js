// header menu  open and close functionality and variable
const menu=document.querySelector('header .header-menu-bar .menu-bar');
const menuOnButton=document.querySelector(' .header-menu-bar .menu-bar-icon')
const menuOffButton=document.querySelector(' .header-menu-bar .menu-bar nav  .menu-close-icon ')

menuOnButton.addEventListener('click',()=>{
    menu.style.display='block';
})

menuOffButton.addEventListener('click',()=>{
    menu.style.display='none';
})












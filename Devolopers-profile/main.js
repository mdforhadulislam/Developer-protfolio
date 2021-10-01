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

//filltering the work demo

const all=document.querySelector('main #work .work-div .work-menu-card .menu-div nav ul li:nth-child(1) a')

const design=document.querySelector('main #work .work-div .work-menu-card .menu-div nav ul li:nth-child(2) a')

const development=document.querySelector('main #work .work-div .work-menu-card .menu-div nav ul li:nth-child(3) a')

let designCard=document.querySelector('main #work .work-div .work-menu-card .card-div #all #web-design')

let developmentCard=document.querySelector('main #work .work-div .work-menu-card .card-div #all #web-development')

all.addEventListener('click',()=>{
    designCard.style.display='block'
    developmentCard.style.display='block'
})

design.addEventListener('click',()=>{
    designCard.style.display='block'
    developmentCard.style.display='none'
})

development.addEventListener('click',()=>{
    designCard.style.display='none'
    developmentCard.style.display='block'
})













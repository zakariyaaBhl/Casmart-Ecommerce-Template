'use strict';

/***
 *  #HEADER: navbar & navbarLinks Toggle 
 */ 

const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');
const navOpenBtn = document.querySelector('[data-nav-open-btn]');
const navCloseBtn = document.querySelector('[data-nav-close-btn]');

const elmtArr = [navOpenBtn, overlay, navCloseBtn];

elmtArr.forEach((elmt, index)=>{
    elmt.addEventListener('click',()=>{
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
});

// const navbarLinks = document.querySelectorAll('[data-navbar-link]');
// navbarLinks.forEach((navbarLink, index)=>{
//     navbarLink.addEventListener('click', ()=>{
//         navbar.classList.toggle('active');
//         overlay.classList.toggle('active');
//     });
// })

/***
 *  #HEADER: add active class on header when scrolled 200px from top
 */ 

const header = document.querySelector('[data-header]');

window.addEventListener('scroll', ()=>{
    window.scrollY >= 200 ? header.classList.add('active') : header.classList.remove('active');
});



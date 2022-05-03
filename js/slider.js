'use strict'

const slider = document.querySelectorAll('.product-container')
const lista = document.querySelectorAll('.product-container')
const flechaiz = document.querySelectorAll('.pre-btn')
const flechader = document.querySelectorAll('.nxt-btn')


flechader[0].addEventListener('click',()=>{
    lista[0].style.transform = `translateX(${ -100 }%)`
    lista[1].style.transform = `translateX(${ -100 }%)`
    slider[0].style.marginLeft = '0px';
    slider[0].style.marginRight = '0px';
})

flechaiz[0].addEventListener('click',()=>{
    lista[0].style.transform = `translateX(${ 0 }%)`
    lista[1].style.transform = `translateX(${ 0 }%)`
    slider[0].style.marginLeft = '70px';
    slider[0].style.marginRight = '50px';
})

flechader[1].addEventListener('click',()=>{
    lista[2].style.transform = `translateX(${ -100 }%)`
    lista[3].style.transform = `translateX(${ -100 }%)`
    slider[2].style.marginLeft = '0px';
    slider[2].style.marginRight = '0px';
})

flechaiz[1].addEventListener('click',()=>{
    lista[2].style.transform = `translateX(${ 0 }%)`
    lista[3].style.transform = `translateX(${ 0 }%)`
    slider[2].style.marginLeft = '70px';
    slider[2].style.marginRight = '50px';
})


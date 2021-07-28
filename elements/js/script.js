'use strict';

const box = document.getElementById('box');
console.log(box);

const bot = document.getElementsByTagName('button');
console.log(bot[1]);

const circles = document.getElementsByClassName("circle");
console.log(circles);

const hearts = document.querySelectorAll(".heart");
console.log(hearts);

hearts.forEach(item=>{
    console.log(item);
})
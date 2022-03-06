let elHeader = document.querySelector(".header");
let elHeaderHamburgBtn = document.querySelector(".header__hamburg");

elHeaderHamburgBtn.addEventListener('click', function(){
elHeader.classList.toggle("header--active");
})
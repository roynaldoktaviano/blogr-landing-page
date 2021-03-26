const headerLink = document.querySelectorAll(".link");
const headerBox = document.querySelector('.box');

headerLink.forEach(function(elem){
    const boxMenu = headerBox.parentElement.lastChild;
    if(boxMenu.classList.contains('pop-in')){
        boxMenu.classList.remove('pop-in');
        boxMenu.classList.add('pop-out');
    } else {
        boxMenu.classList.remove('pop-out');
        boxMenu.classList.add('pop-in');
    }
})
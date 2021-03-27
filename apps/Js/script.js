const headerLink = document.querySelectorAll('.link-content');
const hamburger = document.querySelector('.hamburger')
const hamburgerLink = document.querySelectorAll('.hamburger-link');

headerLink.forEach(function(elem){
    const boxFile = elem.lastElementChild;
    elem.addEventListener("mouseenter",function(){
        boxFile.classList.remove('pop-out');
        boxFile.classList.add('pop-in');
    })

    elem.addEventListener("mouseleave", function(){
        boxFile.classList.add('pop-out');
        boxFile.classList.remove('pop-in');
    })
})

hamburger.addEventListener("click", function(){
    if(hamburger.classList.contains('open')){
        hamburger.classList.remove('open')
    } else {
        hamburger.classList.add('open');
    }
})

hamburgerLink.forEach(function(elem){
    const arrow = elem.children;
    const text = elem.firstElementChild;
    elem.addEventListener("click", function(){
        if(elem.classList.contains('open')){
            elem.classList.remove('open');
            text.style.color = "#1f3f5b"; 
            arrow[1].style.transform = "rotate(0deg)";
        } else {
            elem.classList.add('open');
            text.style.color = "gray"
            arrow[1].style.transform = "rotate(180deg)";
        }
    })
})
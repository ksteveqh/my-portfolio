// codigo de barra de navegacion

var navbar = document.getElementById ("navbar");
var idmenu = document.getElementById ("idmenu");

window.onscroll = function(){
    if(window.pageYOffset >= idmenu.offsetTop){
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}
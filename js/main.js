var menu = document.getElementsByClassName("menu")[0];
var navigation = document.getElementsByClassName("navigation")[0];
var pageBody = document.getElementsByTagName("body")[0];

menu.addEventListener('click', function() {
    pageBody.classList.toggle("locked");
    if (menu.innerHTML === "menu") {
        navigation.style.opacity = "1";
        navigation.style.visibility = "visible";
        menu.innerHTML = "close";
      } else {
        menu.innerHTML = "menu";
        navigation.style.opacity = "0";
        navigation.style.visibility = "hidden";
      }
},false);

window.onscroll = function() {

var header = document.getElementsByClassName("header")[0];
    if ( window.pageYOffset > 845 ) {
        header.classList.add("display");
    } else {
        header.classList.remove("display");
    }
}



var inViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

var video = document.getElementsByClassName('video');
if (inViewport(video)) {
    video[0].play();
}else {
    video[0].pause();
}
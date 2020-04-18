document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'right'});
    
});

/*document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {edge:'right'});
    
});*/


document.querySelector('#menu-icon').onclick = function(){
    var element =  document.querySelector('#sidenav_home');
    element.classList.add("animated", "slideInRight");
    var element =  document.querySelector('#sidenav_recipes');
    element.classList.add("animated", "slideInRight");
};

document.querySelector('.sidenav').onclick = function(){
    var element =  document.querySelector('#sidenav_home');
    element.classList.remove("animated", "slideInRight");
    var element =  document.querySelector('#sidenav_recipes');
    element.classList.remove("animated", "slideInRight");
};


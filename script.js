var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar"); 

var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    // whenever we click on sidebar if small-sidebar class exists inside the sidebar then it will remove it, if it doesnt exist then it will add it.
    container.classList.toggle("large-container");
}
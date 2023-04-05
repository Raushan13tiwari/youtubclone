var menu_icon = document.querySelector(".menu_icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menu_icon.onclick = function(){
    sidebar.classList.toggle("small_sidebar");
    container.classList.toggle("large-container");
}
var menu = document.getElementById('menu-mobile');
var burger = document.getElementById('burger');
var close = document.getElementById('close');

burger.onclick = function () {
	menu.style.display = "flex";
};
close.onclick = function () {
	menu.style.display = "none";
};
	
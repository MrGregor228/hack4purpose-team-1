let menu = document.querySelector(".navigation-menu__wrapper ul"),
	button = document.querySelector(".hidden-menu button");

button.addEventListener("click", () => {
	menu.classList.toggle("show");
});

$("nav").on("click", "a", function (event) {
	event.preventDefault();

	var id = $(this).attr("href"),
		top = $(id).offset().top - 150;

	$("body,html").animate({ scrollTop: top }, 1000);
	menu.classList.toggle("show");
});

$(document).ready(function () {
	$(".header_menu_icon").click(function () {
        $(".header_menu").toggleClass("active");
	});
});
$(".item").click(function () {
    $(".header_menu").removeClass("active");
	$("#menu-btn").prop('checked', false);
});

$(document).ready(function () {
    "use strict";
	$(".menu-icon").click(function () {
        $(".menu-mob").toggleClass("active");
	});
});
$(".item").click(function () {
    "use strict";
    $(".menu-mob").removeClass("active");
	$("#menu-btn").prop('checked', false);
});
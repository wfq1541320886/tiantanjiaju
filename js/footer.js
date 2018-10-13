$(function() {
var text = document.createElement("i");
//$("footer dl dt").mouseenter(function () {
//  $(this).append(text);
//})
//$("footer dl dt").hover(function () {
//  $("footer dl dt i").css("width", "60px");
//},function(){
//  $("footer dl dt i").css("width","0px");
//});
$("#footer").on("mouseenter", "footer dl dt", function() {
	$(this).append(text);
	$("footer dl dt i").css("width", "60px");
});
$("#footer").on("mouseleave", "footer dl dt", function() {
	$("footer dl dt i").css("width", "0px");
})
})
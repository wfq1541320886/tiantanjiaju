$(function() {
	$("#header").load("header.html .nav_wrap");
	$("#footer").load("footer.html .below");
	$("#cebianlan").load("cebianlan.html");
	var grectfill = document.getElementsByClassName("g-rect-fill")[0];
	var i = 1;
	var times = setInterval(function() {
		i += 10;
		grectfill.style.strokeDasharray = '' + i + ',' + i + '';
		if(i >= 2350) {
			clearInterval(times)
		}
	}, 3);
//	$(".banner_fix").hide();
//	$(".divBox_wrap").hide();
	$(".out").click(function() {
		$(".banner_fix").hide();
	});
	$(".commercial_right li i").click(function() {
		$(".divBox_wrap").show();
		$(".off").hide();
	});
	$(".on1").click(function() {
		$(".banner_fix").show();
	});
})
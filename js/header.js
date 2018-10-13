$(function() {
	//	console.log($('.bav_list dl dd'))
	//	$(".navbar-nav>li").mouseenter(function() {
	//		$(this).find('.bav_list dl dd').eq(0).show().siblings().hide();
	//	});
	//	$(".bav_list ol li").mouseenter(function() {
	//		var ind = $(this).index();
	//		$(this).find('.bav_list dl dd').eq(ind).show().siblings().hide();
	//	})

	$("#header").on("mouseenter", ".navbar-nav>li", function() {
		$(this).find('.bav_list dl dd').eq(0).show().siblings().hide();
//		var ind = $(this).index();
//		$(this).find('.nav-link').eq(ind).addClass("shouye").siblings().removeClass("shouye");
	});
	$("#header").on("mouseenter", ".bav_list ol li", function() {
		var ind = $(this).index();
		$(this).parents("li").find('.bav_list dl dd').eq(ind).show().siblings().hide();
	});
//	$("#header").on("mouseenter",".nav-link",function(){
//		$(this).addClass("shouye").siblings().removeClass("shouye");
//	})

})

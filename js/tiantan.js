$(function() {
	$("#header").load("header.html .nav_wrap");
	$("#footer").load("footer.html .below");
	$("#cebianlan").load("cebianlan.html");
	  $(".nav-item>a").eq(1).addClass("shouye").siblings().removeClass("shouye");
	var grectfill = document.getElementsByClassName("g-rect-fill")[0];
	var i = 1;
	var times = setInterval(function() {
		i += 10;
		grectfill.style.strokeDasharray = '' + i + ',' + i + '';
		if(i >= 2350) {
			clearInterval(times)
		}
	}, 3);
	window.onscroll = function() {
		topFn();
		var title_1 = document.getElementsByClassName("title_1")[0];
		var title_2 = document.getElementsByClassName("title_2")[0];
		var oLi1 = document.getElementsByClassName("pinpai_con1_u1_li")[0];
		var oLi2 = document.getElementsByClassName("pinpai_con1_u1_li")[1];
		var title_3 = document.getElementsByClassName("title_1")[1];
		var title_4 = document.getElementsByClassName("title_2")[1];
		var title_text = document.getElementsByClassName("title_text")[0];
		var swipercontainer1=document.getElementsByClassName("swiper-container1")[0];
		var swipercontainer2=document.getElementsByClassName("swiper-container2")[0];
		var title_5 = document.getElementsByClassName("title_1")[2];
		var title_6 = document.getElementsByClassName("title_2")[2];
		var family_text1 = document.getElementsByClassName("family_text1")[0];
		var tupian = document.getElementsByClassName("tupian")[0];
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 700){
			title_1.style.transform = 'translateY(0)';
			title_1.style.opacity = '1';
			title_2.style.transform = 'translateY(0)';
			title_2.style.opacity = '1';
			oLi1.style.transform = 'translateY(0)';
			oLi1.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 1300){
			oLi2.style.transform = 'translateY(0)';
			oLi2.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 2000){
			title_3.style.transform = 'translateY(0)';
			title_3.style.opacity = '1';
			title_4.style.transform = 'translateY(0)';
			title_4.style.opacity = '1';
			title_text.style.transform = 'translateY(0)';
			title_text.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 2600){
			swipercontainer1.style.transform = 'translateY(0)';
			swipercontainer1.style.opacity = '1';
			swipercontainer2.style.transform = 'translateY(0)';
			swipercontainer2.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 3000){
			title_5.style.transform = 'translateY(0)';
			title_5.style.opacity = '1';
			title_6.style.transform = 'translateY(0)';
			title_6.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 3200){
			family_text1.style.transform = 'translateX(0)';
			family_text1.style.opacity = '1';
			tupian.style.transform = 'translateX(0)';
			tupian.style.opacity = '1';
		}
	}
	
	
	
	
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		loop: true,
		spaceBetween: 30,
		pagination: {
			clickable: true,
		},
		autoplay: {
			delay: 5000,
			stopOnLastSlide: false,
			disableOnInteraction: true,
		},

	});
})
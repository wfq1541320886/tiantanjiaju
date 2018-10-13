$(function() {
	$("#header").load("header.html .nav_wrap");
	$("#footer").load("footer.html .below")
	$("#cebianlan").load("cebianlan.html");
	window.onscroll = function() {
		topFn();
		var oAbout = document.getElementsByClassName('about')[0];
		var oAbout1 = document.getElementsByClassName('about_1')[0];
		var oAbout2 = document.getElementsByClassName('about_2')[0];
		var about=document.getElementsByClassName("about_below");
		var title_1=document.getElementsByClassName("title_1")[0];
		var title_2=document.getElementsByClassName("title_2")[0];
		var oTitle_1=document.getElementsByClassName("title_1")[1];
		var oTitle_2=document.getElementsByClassName("title_2")[1];
		var oTitle_3=document.getElementsByClassName("title_1")[2];
		var oTitle_4=document.getElementsByClassName("title_2")[2];
		var oTtitle_text=document.getElementsByClassName("title_text")[0];
		var oDoor_right=document.getElementsByClassName("door_right")[0];
		var oTitle_5=document.getElementsByClassName("title_1")[3];
		var oTitle_6=document.getElementsByClassName("title_2")[3];
		var oTitle_7=document.getElementsByClassName("title_1")[4];
		var oTitle_8=document.getElementsByClassName("title_2")[4];
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 700) {
			oAbout.style.transform = 'translateX(0)';
			oAbout.style.opacity = '1';
			oAbout1.style.transform = 'translateX(0)';
			oAbout1.style.opacity = '1';
			oAbout2.style.transform = 'translateY(0)';
			oAbout2.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 1300) {
			about[0].style.top = 0;
			about[0].style.opacity = '1';
			about[1].style.top = 0;
			about[1].style.opacity = '1';
			about[2].style.top = 0;
			about[2].style.opacity = '1';
			about[3].style.top = 0;
			about[3].style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 1600) {
			title_1.style.transform = 'translateX(0)';
			title_1.style.opacity = '1';
			title_2.style.transform = 'translateX(0)';
			title_2.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 2500) {
			oTitle_1.style.transform = 'translateX(0)';
			oTitle_1.style.opacity = '1';
			oTitle_2.style.transform = 'translateX(0)';
			oTitle_2.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 3400) {
			oTitle_3.style.transform = 'translateY(0)';
			oTitle_3.style.opacity = '1';
			oTitle_4.style.transform = 'translateY(0)';
			oTitle_4.style.opacity = '1';
			oTtitle_text.style.transform = 'translateX(0)';
			oTtitle_text.style.opacity = '1';
			oDoor_right.style.transform = 'translateX(0)';
			oDoor_right.style.opacity = '1';
			
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 3700) {
			oTitle_5.style.transform = 'translateY(0)';
			oTitle_5.style.opacity = '1';
			oTitle_6.style.transform = 'translateY(0)';
			oTitle_6.style.opacity = '1';
		}
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >=4100) {
			oTitle_7.style.transform = 'translateY(0)';
			oTitle_7.style.opacity = '1';
			oTitle_8.style.transform = 'translateY(0)';
			oTitle_8.style.opacity = '1';
		}
	}
$(".about_below").hover(function () {
	var ind = $(this).index();
	
    $(this).find(".about_icon").eq(ind).css({
    	"transform":"rotate(360deg)",
    	"width":"120px",
    	"height":"120px",
    	"opacity":1
    });
},function(){
    $(".about_icon").css({
    	"transform":"rotate(0deg)",
    	"width":"10px",
    	"height":"10px",
    	"opacity":0
    })
})
var swiper = new Swiper('.swiper-container1', {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        clickable: true,
      },
   });
})
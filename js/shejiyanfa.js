$(function(){
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
	window.onscroll = function() {
		topFn();
		var shalsd_left = document.getElementsByClassName("shalsd_left")[0];
		var jjlb_u1_li = document.getElementsByClassName("jjlb_u1_li");
		if((document.documentElement.scrollTop + document.documentElement.clientHeight) >= 700){
			jjlb_u1_li[0].style.transform = 'translateY(0)';
			jjlb_u1_li[0].style.opacity = '1';
			jjlb_u1_li[1].style.transform = 'translateY(0)';
			jjlb_u1_li[1].style.opacity = '1';
			jjlb_u1_li[2].style.transform = 'translateY(0)';
			jjlb_u1_li[2].style.opacity = '1';
			shalsd_left.style.transform = 'translateY(0)';
			shalsd_left.style.opacity = '1';
		}
	};
	var btn = document.getElementsByClassName("btn")[0];
	var box = document.getElementById("box");
	btn.onclick = function() {
				ajax()
		};
			function ajax() {
				var xhr = new XMLHttpRequest() //1
				if(window.XMLHttpRequest) {
					xhr = new XMLHttpRequest() //兼容IE7及主流浏览器
				} else {
					xhr = new ActiveXObject("Microsoft.XMLHTTp") //IE5,6
				}
				xhr.open("GET", "JSON/shejishi.json", true) //第二步  3个参数
				xhr.onload = function() { //第三步 检测
					if(this.readyState == 4 && this.status == 200) {
						//console.log(this.response)
						var axtext = JSON.parse(xhr.response)
						for(var i in axtext) {
							box.innerHTML +='<div class="list"><img src=' +axtext[i].photo+ '/><div class="list_txt"><h1>'+axtext[i].name+'/'+axtext[i].job+'</h1><font>'+axtext[i].introduce+'</font></div></div>'
						}
					}
				}
				xhr.send() //第四步  发送
			};
})
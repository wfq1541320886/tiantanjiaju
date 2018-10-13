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
	}, 3)
	window.onscroll = function() {
		topFn();

	}
//瀑布流
var json = [{
		"text": "1",
		"src": "img/img3/img1.jpg",
		"height": "273"
	},
	{
		"text": "2",
		"src": "img/img3/img2.jpg",
		"height": "273"
	},
	{
		"text": "3",
		"src": "img/img3/img3.jpg",
		"height": "306"
	},
	{
		"text": "4",
		"src": "img/img3/img4.jpg",
		"height": "270"
	},
	{
		"text": "5",
		"src": "img/img3/img5.jpg",
		"height": "273"
	},
	{
		"text": "6",
		"src": "img/img3/img6.jpg",
		"height": "307"
	},
	{
		"text": "7",
		"src": "img/img3/img7.jpg",
		"height": "272"
	},
	{
		"text": "8",
		"src": "img/img3/img8.jpg",
		"height": "285"
	},
	{
		"text": "9",
		"src": "img/img3/img9.jpg",
		"height": "303"
	},
	{
		"text": "10",
		"src": "img/img3/img1.jpg",
		"height": "272"
	},
	{
		"text": "11",
		"src": "img/img3/img2.jpg",
		"height": "273"
	},
	{
		"text": "12",
		"src": "img/img3/img3.jpg",
		"height": "272"
	},
	{
		"text": "13",
		"src": "img/img3/img5.jpg",
		"height": "285"
	},
	{
		"text": "14",
		"src": "img/img3/img6.jpg",
		"height": "303"
	},
	{
		"text": "15",
		"src": "img/img3/img7.jpg",
		"height": "272"
	},
	{
		"text": "16",
		"src": "img/img3/img8.jpg",
		"height": "273"
	},
	{
		"text": "17",
		"src": "img/img3/img9.jpg",
		"height": "273"
	},
	{
		"text": "18",
		"src": "img/img3/img1.jpg",
		"height": "280"
	}
]

function getSmallDiv(wrap, oD) {
	var len = oD.length;
	var h = Infinity;
	var getD;
	for(var i = 0; i < len; i++) {
		if(oD.eq(i).height() < h) {
			h = oD.eq(i).height();
			getD = oD.eq(i);
		}
	}
	return getD;
}
$(".btn1").click(function() {
	for(var i = 0; i < json.length; i++) {
		var str;
		str = "<div class=\"content\">";
		str += "<img src=" + json[i].src + " height=" + json[i].height + " alt=\"\" />";
		str += "<div class=\"imgcaption\">" + json[i].text + "</div>";
		str += "</div>";
		getSmallDiv($(".section"), $(".aside")).append(str);
	}
});
})
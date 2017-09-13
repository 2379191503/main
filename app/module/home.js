var app = angular.module('homeModule',[]);
app.controller('home',function($scope){
	var swiper=new Swiper(".swiper-container",{
		autoplay: 2000,
		autoplayDisableOnInteraction: false,
		pagination:".swiper-pagination"
	})
$(function(){
	function dh(){
		var pos=Math.abs($(".imgs").position().left);
		var t=(560-pos)*10000/560;
		$(".imgs").animate({"left":"-560px"},t,'linear',function(){
			$(".imgs").css("left","0px");
			dh();
		})
	}
	$(".imgs").css("width","1120px");
	$(".imgs .lb").clone().appendTo($(".imgs"));
	dh();
	$('.pics').mousemove(function(){
		$(".imgs").stop();
	})
	$('.pics').mouseleave(function(){
		dh();
	})
})
})
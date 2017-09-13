
$(function(){
	function app(s){
		$("#lunbo li").eq(s).addClass("bg").siblings().removeClass("bg");
		$(".pics img").eq(s).fadeIn().siblings().fadeOut();
	}
	var i=0;
	var timer=null;
	function ogg(){
		i++;
		if(i>=2){
			i=0;
		}
		app(i);
	}
	timer=setInterval(ogg,2000);
	$("#lunbo li").mouseover(function(){
		clearInterval(timer);
		var index=$(this).index();
		i=index;
		app(i);
	})
	$(".pics").mouseenter(function(){
		clearInterval(timer);
	})
	$(".pics").mouseleave(function(){
		timer=setInterval(ogg,2000);
	})
	i=0;
	var flag=true;
	$("#dong li").click(function(){
		console.log('a')
		var index=$(this).index();
		if(!flag||i==index){
			return;
		}
		flag=false;
		if(i>index){
			$(".tui").eq(i).siblings("div").css("left","-800px");
			$(".tui").eq(i).animate({"left":"800px"},500,function(){
				$(".tui").eq(i).css("left","800px");
			})
			$(".tui").eq(index).animate({"left":"0px"},500,function(){
				$(".tui").eq(index).siblings("div").css("left","-800px");
				flag=true;
			});
		}
		if(i<index){
			$(".tui").eq(i).siblings("div").css("left","800px");
			$(".tui").eq(i).animate({"left":"-800px"},500,function(){
				$(".tui").eq(i).css("left","-800px");
			})
			$(".tui").eq(index).animate({"left":"0px"},500,function(){
				$(".tui").eq(index).siblings("div").css("left","800px");
				flag=true;
			});
		}
		i=index;
	})
})

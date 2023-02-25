$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
		$('.scroll-to-top').fadeIn();
	} else {
	  $('.scroll-to-top').fadeOut();
	}
});

$('.scroll-to-top').on('click', function(e) {
  e.preventDefault();
	$('html, body').animate({scrollTop : 0}, 1000);
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
		$('.scroll-to-cnxiaobai').fadeIn();
	} else {
	  $('.scroll-to-cnxiaobai').fadeOut();
	}
});

/* 锚点平滑过渡 */
$(function(){
  $('a').click(function(){
    // 根据a标签的 href 转换为 id 选择器，获取 id 元素所处的位置，并高度减 79px（可根据需要自由设置）
    $('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -79 )}, 1000);
  });
});

/* 页面添加锚点后点击不改变 URL */
(function(){
	var allJump=[];
	var allA=document.querySelectorAll("a");// 获取所有a标签
	allA.forEach((ele, index)=>{
		if(ele.href.search("#") > 12){
			allJump.push(ele);// 判断a标签是否含有#	
		}
	})
	allJump.forEach((ele)=>{
		ele.addEventListener("click",(e)=>{
			// 首先解析出href
			e.preventDefault();// 这个非常关键
			var jumpTarget = ele.href.split("#")[1]
			if(jumpTarget){
				var targaetEle=document.querySelector("#" + jumpTarget);
				h = targaetEle.offsetTop;
				window.scrollTo(0,1000);
			}else{
				window.scrollTo(0,0);
			}
		});			
	})
}).call()

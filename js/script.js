 $(document).ready(function() {
            mobile_menu();
        });

        function mobile_menu() {
            /* 변수 선언 */
            var $menu = null;
            var $left_gnb = null; // 영역 전체
            var $depth1_wrap = null;
            var $depth1 = null;
            var $depth1_btn = null;

            /* 시작 함수 */
            function start() {
                init();
                init_event();
            }
            /* 변수 초기화 함수 */
            function init() {
                $menu = $('.menu');
                $left_gnb = $('.left_gnbWrap'); // 영역 전체
                $depth1_wrap = $('.left_gnb>li');
                $depth1 = $depth1_wrap.children('ul');
                $depth1_btn = $depth1_wrap.children('a');
            }
            /* 이벤트 함수 */
            function init_event() {

                /* 모바일 메뉴 버튼 클릭했을때 모바일 메뉴영역 나오게 하기 */
                $menu.click(function(event) {
                    event.preventDefault();
                    $left_gnb.addClass('on');
                });

                /* x버튼 눌렀을때 모바일 메뉴 닫기 */
                $('.close').click(function(event) {
                    event.preventDefault();

                    $left_gnb.removeClass('on');

                    // x버튼 누르면 시간차 약간두고 소메뉴 닫히게 하기
                    setTimeout(function() {
                        $depth1_btn.removeClass('on');
                        $depth1.slideUp();
                    }, 300)
                });

                /* depth1의 각메뉴 클릭시 depth2 나오게 하기 */
                $depth1_btn.click(function(event) {
                    event.preventDefault();
                    var $this = $(this);
                    var $this_ul = $this.siblings('ul');

                    var check = $this.hasClass('on');
                    if (check) {
                        $this.removeClass('on');
                        $this_ul.stop(true, true).slideUp();
                    } else {
                        $depth1_btn.removeClass('on');
                        $depth1.stop().slideUp();
                        $this.addClass('on');
                        $this_ul.stop(true, true).slideDown();
                    }
                });

                /* 디바이스 크기 변경시 모바일 메뉴영역 숨기기 */
                $(window).resize(function() {
                    $left_gnb.removeClass('on');
                });
            }

            start(); // 시작 호출
        }

/*

$(function(){
  var $slider = $('.slide'),
      $firstSlide = $slider.find('img').first() // 첫번째 슬라이드
  .stop(true).animate({'opacity':1},200); // 첫번째 슬라이드만 보이게 하기

  function PrevSlide(){ // 이전버튼 함수
    var $lastSlide = $slider.find('img').last() //마지막 슬라이드
    .prependTo($slider); //마지막 슬라이드를 맨 앞으로 보내기  
    $secondSlide = $slider.find('img').eq(1)
   //두 번째 슬라이드 구하기
   .stop(true).animate({'opacity':0},400); //밀려난 두 번째 슬라이드는 fadeOut 시키고
    $firstSlide = $slider.find('img').first() //맨 처음 슬라이드 다시 구하기
    .stop(true).animate({'opacity':1},400);
    //새로 들어온 첫 번째 슬라이드는 fadeIn 시키기
  }
  function NextSlide(){ // 다음 버튼 함수
    $firstSlide = $slider.find('img').first() // 첫 번째 슬라이드
    .appendTo($slider); // 맨 마지막으로 보내기
    var $lastSlide = $slider.find('img').last() // 맨 마지막으로 보낸 슬라이드
    .stop(true).animate({'opacity':0},400); // fadeOut시키기
    $firstSlide = $slider.find('img').first()
    // 맨 처음 슬라이드
    .stop(true).animate({'opacity':1},400);
    // fadeIn 시키기
  }
  
  
  setInterval(NextSlide, 5000); //자동 슬라이드 설정

});
*/






var imgs = 2;
var now = 0;

start(); 
	
function start(){
   $(".slide>img").eq(0).siblings().css({"margin-left":"-2000px"});
   setInterval(function(){slide();},3000);
}
function slide(){
   now = now==imgs?0:now+=1;
   $(".slide>img").eq(now-1).css({"margin-left":"-2000px"});   
   $(".slide>img").eq(now).css({"margin-left":"0px"});
}



$(document).ready(function(){
   $(".navi>li").mouseover(function(){
      $(".submenu").stop().slideDown(500);
   });
   $(".navi>li").mouseleave(function(){
      $(".submenu").stop().slideUp(500);
   });
});




$(document).ready(function(){
   $(".navi>li").mouseover(function(){
      $(".submenu_back").stop().slideDown(500);
   });
   $(".navi>li").mouseleave(function(){
      $(".submenu_back").stop().slideUp(500);
   });
});

 


// slider portfolio

$('.portfolio__inner').slick({
  dots: true,
  speed: 500,
  swipeToSlide: true,
  // autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [  
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 3,
      }
    },  
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    }    
  ]
});

// slider reviews

$('.reviews').slick({
  dots: true,
  swipeToSlide: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }
    },
    {
    breakpoint: 920,
    settings: {
      slidesToShow: 2,
    }
  },
  {
    breakpoint: 630,
    settings: {
      slidesToShow: 1,
    }
   }
  ]
});

//slider add
$('.add').slick({
  // cssEase: 'linear', сделает бегущую строку
  swipeToSlide: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  speed: 2000,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  variableWidth: true,  
});

/*collapse questions */

$("[data-collapse]").on('click', function (event) {
  event.preventDefault();

  var $this = $(this),
    blockId = $this.data('collapse');

  $this.toggleClass("active");
});

// menu burger

$('.burger').click(function (event) {
  $('.burger, .menu').toggleClass('active');
});

/*Button up*/

$('body').append('<div class="upbtn"></div>');
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.upbtn').css({
      bottom: '50px'
    });
  } else {
    $('.upbtn').css({
      bottom: '-80px'
    });
  }
});
$('.upbtn').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 500);
  return false;
});

// scroll to anchors

// $(document).ready(function() {
//   var margin = -50; // переменная для контроля докрутки
//   $(".menu__link").click(function() { // тут пишите условия, для всех ссылок или для конкретных
//      $("html, body").animate({
//         scrollTop: $($(this).attr("href")).offset().top+margin+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
//      }, {
//         duration: 1000, // тут можно контролировать скорость
//         easing: "swing"
//      });
//      return false;
//   });
// });

$("body").on('click', '[href*="#"]', function(e){
  var fixed_offset = 50;
  $('html,body').stop().animate({ 
    scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
  e.preventDefault();
});

// multibutton
$('.multi-btn__block').slick({
  swipe: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  cssEase: 'linear',
  speed: 0,
  arrows: false,
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 1000,    
  responsive: [   
    
  ]
});

$('.multi-btn').click(function(event){
  $('.multi-btn__list').toggleClass('active');
});
(function ($) {
	"use strict";
	var nav = $('nav');
  var navHeight = nav.outerHeight();
  
  $('.navbar-toggler').on('click', function() {
    if( ! $('#mainNav').hasClass('navbar-reduce')) {
      $('#mainNav').addClass('navbar-reduce');
    }
  })
    
  
    
    // Preloader
     $(document).ready(function () {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 1000);

  });
    
     var swiper = new Swiper('.big-event-slider', {
      spaceBetween: 30,
      effect: 'fade',
         speed: 900,
      loop: true,
         
      mousewheel: {
        invert: false,
      },
          autoplay: {
        delay: 9000,
        disableOnInteraction: true,
      },
      // autoHeight: true,
      pagination: {
        el: '.big-event-slider__pagination',
        clickable: true,
      }
    });
    

   $('[data-fancybox="images"]').fancybox({
  buttons : [ 
    'slideShow',
    'share',
    'zoom',
    'fullScreen',
    'close'
  ],
  thumbs : {
    autoStart : true
  }
});

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

	/*--/ Star ScrollTop /--*/
	$('.scrolltop-mf').on("click", function () {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});



    
	/*--/ Star Scrolling nav /--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight - 40)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

    /*--/ Star Scrolling nav /--*/
	$('a.js-scroll2[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});

	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	/*--/ End Scrolling nav /--*/

	/*--/ Navbar Menu Reduce /--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50; 
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});
    
    
    
     //Main Slider
          $('.skitter-large').skitter({
                label_animation: 'slideUp',
                progressbar: true,
                navigation: true,
                stop_over: true,
                controls:true,
                dots: true,
                mouseOverButton: function() {
                    $(this).stop().animate({
                        opacity: 0.5
                    }, 200);
                },

                with_animations: ["directionTop", "glassBlock", "cube", "cubeSize", "cut"],
                interval: 10000,
             
             
            });
    

    
    
  // Initiate the wowjs animation library
  new WOW().init();

  // Initialize Venobox
  $('.venobox').venobox({
     bgcolor: '',
            overlayColor: 'rgba(6, 12, 34, 0.85)',
            closeBackground: '',
            closeColor: '#fff' ,
           framewidth: '800px',     
          frameheight: '500px',
              spinner :'cube-grid'
  });
    

     $('.venoboxv').venobox({
         
     bgcolor: '',
            overlayColor: 'rgba(6, 12, 34, 0.85)',
            closeBackground: '',
            closeColor: '#fff' ,
           framewidth: '90%',     
              spinner :'cube-grid'
  });

 
    
    
    
    
    /*================================
    Swiper slider Activation
    ==================================*/
    // classes-carousel
    function classes_carousel() {
        var mySwiper = new Swiper('.classes-carousel', {
            speed: 400,
            loop: true,
            spaceBetween: 30,
            slidesPerView: 2,
               pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
          keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
            // Responsive breakpoints
            breakpoints: {
                640: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 10
                }
            }
        });
    }
    classes_carousel();
    
    function classes_carousel_home() {
        var mySwiper = new Swiper('.classes-carousel-home', {
            speed: 400,
            loop: true,
            spaceBetween: 30,
            slidesPerView: 1,
               pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
          keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
          
           
        });
    }
    classes_carousel_home();

    // testimonials-carousel
    function testimonials_carousel() {
        var mySwiper = new Swiper('.testimonials-carousel', {
            speed: 400,
            loop: true,
            grabCursor: true,
            slidesPerView: 1,
               pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
          keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
        });
    }
    testimonials_carousel();
    
    
    // adv-carousel
    function adv_carousel() {
        var mySwiper = new Swiper('.adv-carousel', {
            navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
            speed: 800,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            slidesPerView: 1,
               pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
          keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
            
        });
    }
    adv_carousel();
    
    
   

  
     // Gallery carousel (uses the Owl Carousel library)
  $(".gallery-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    center:true,
    responsive: { 0: { items: 1 }, 768: { items: 3 }, 992: { items: 4 }, 1200: {items: 5}
    }
  });
    
  
    
       var swiper = new Swiper('.home-slide', {
          effect: 'cube',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },cube: {
        shadow: true,
        slideShadows: true,
        
    },
           
         speed: 2000,
            loop: true,
            grabCursor: true,
           autoplay: false ,
                pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
     
    });
    
     

     var swiper = new Swiper('.page-slide', {
          effect: 'coverflow',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
         speed: 2000,
            loop: true,
            grabCursor: true,
           autoplay: {
        delay: 7000,
        disableOnInteraction: false, } ,
                pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
     
    });
    
    $(".brand-carousel").owlCarousel({
        rtl: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 3
            },
            900: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    });
    
   
    
    
    $('.dropdown .dropdown-menu').on('click', function(event){
    // The event won't be propagated up to the document NODE and 
    // therefore delegated events won't be fired
    event.stopPropagation();
});
    
    
     $('#sidebarCollapse').on('click', function () {
                     $('#sidebar').toggleClass('active');
                     $(this).toggleClass('active');
                 });
    
    $('.list-unstyled li a').on('click', function(){
    $('.list-unstyled').collapse('hide');
});
    
   $(".gear-check").click(function() {
             
			 $(".color-box").slideToggle();
        }); 
    $('.change-colors li').on('click', function(){
        
    $('body').attr('data-default-color', $(this).data('color'));  
        
    })
    
    $('.change-font li').on('click', function(){
        
    $('body').attr('data-default-font', $(this).data('font'));  
        
    })
    
    //top Menu
        $(".top-menu").click(function() {
            $('#header').toggle(function() {
                $('#header .top-menu').show();
                
            });
        });
    
     $(".top-menu").click(function() {
            $('.logos , .log').toggle(function() {
                $('#header .top-menu').hide();
                
            });
        });
    
   
    
     //chat
        $(".open-chat").click(function() {
            $('#chat-popup').toggle(function() {
                $('#chat-popup .open-chat').show();
                
            });
        });
    
    
    $(".open-chat").click(function() {
        $(".open-chat i").toggleClass("fas fa-times");
    });
    
        //Nav Menu
        $(window).scroll(function() {
            if(window.innerWidth > 500) {
             
            if ($(this).scrollTop() > 5) {
                $('#header').slideDown('.1s').addClass('fixed');
                $('#header .top-menu').hide();
                  $('.logos , .log').hide();
                
          
            } else {
                $('#header').removeClass('fixed').slideUp('slow');
                 $('.logos , .log').fadeIn();
            }
        }
            else {
               
            }
            
        });
    
    
     var winH =$(window).height(),
        topH =$('.top-nav').innerHeight(),
        navH =$('.nav').innerHeight();
    
    $(' ').height(winH - (topH + navH));
    
    
    
   
    
 
   $('.tabs-cale .panel-collapse , .media .panel-collapse ').on('shown.bs.collapse', function(e) {
  var $panel = $(this).closest('.panel');
  $('html,body').animate({
    scrollTop: ($panel.offset().top -70)
  }, 900);
});
    
    
    
    $(".searchBox").hover(function() {
	$(this).addClass("hovered");
    $("#intro , .intro").on("click", function() {
     $(".searchBox").removeClass("hovered");
});
    });
    
$(' li.btn-sett').hover(function() {
  $(this).find('.setting').stop(true, true).delay(200).fadeIn(700);
}, function() {
  $(this).find('.setting').stop(true, true).delay(200).fadeOut(700);
});

    
})(jQuery);

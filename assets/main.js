const thememode = localStorage.getItem("mode")
$(function(){ 
    
    if(thememode == "dark")
    {
      mode("light")
    }
    else
    {
      mode("dark")
    }

    $("#theme-icon").on("click",function(){
      var body = $("body").attr("class");
      if(body == "")
      {
        mode("light");
      } 
      else
      {
        mode("dark");
      }
    })
  

  
   $('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
   });


    // var $st = $('.pagination');
    var $slickEl = $('.slick_center_slider');
    $slickEl.slick({
      centerMode: true,
      centerPadding: '0px',
      prevArrow: '<button class="slick-arrow slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button class="slick-arrow slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
               prevArrow: '<button class="slick-arrow slide-arrow prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow: '<button class="slick-arrow slide-arrow next-arrow"><i class="fa-solid fa-chevron-right"></i></button>',
   
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
    // $('.center').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     console.log('beforeChange', currentSlide, nextSlide);
    //   });
    // $('.center').on('afterChange', function(event, slick, currentSlide){
    // console.log('afterChange', currentSlide);
    // });
})

function mode(mode)
{
      const sun = "https://www.uplooder.net/img/image/55/7aa9993fc291bc170abea048589896cf/sun.svg";
      const moon = "https://www.uplooder.net/img/image/2/addf703a24a12d030968858e0879b11e/moon.svg"
      if(mode == "light")
      {
        $(".logo-light").removeClass("hide")
        $(".logo-dark").addClass("hide")
         $("body").addClass("theme-dark")
        $(".theme-container").removeClass("shadow-light")
        $(".theme-container").addClass("shadow-dark")
        $("#theme-icon").prop("src",moon)
        localStorage.setItem("mode" ,"dark")
      }
      else if(mode == "dark")
      {
        $(".logo-light").addClass("hide")
        $(".logo-dark").removeClass("hide")
        $("body").removeClass("theme-dark")
        $(".theme-container").removeClass("shadow-dark")
        $(".theme-container").addClass("shadow-light")
        $("#theme-icon").prop("src",sun)
        localStorage.setItem("mode" ,"light")
      }
}
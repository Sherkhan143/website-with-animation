jQuery(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        // nav:true,
        items:1,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true,
        // dots:false
        
    });
    $(window).scroll(function(){
        var top=$(window).scrollTop();
        if(top>=100)
        {
            $("header").addClass("secondary");
        }
        else if($('header').hasClass("secondary"))
        {
            $("header").removeClass("secondary");
        }
    })
    $('#menu').slicknav({
        label:'',
    })
    $('a').smoothScroll();

    $(".animation").each(function(){

        var waypoint = new Waypoint({
            element: this,
            handler: function(direction) {
              var animation =$(this.element).attr("data-animation");
              $(this.element).css('opacity','1');
              $(this.element).addClass("animated "+ animation);
            },
            offset: '75%'
          })
    });

    
});

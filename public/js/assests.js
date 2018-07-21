jQuery(document).ready(function($) {
    $(".scroll").click(function(event) {
      event.preventDefault();
      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 1000);
    });
    $("#owl-demo1").owlCarousel({
        items: 1,
        lazyLoad: false,
        autoPlay: true,
        navigation: false,
        navigationText: false,
        pagination: true,
      });
    $("#owl-demo3").owlCarousel({
        items: 1,
        lazyLoad: false,
        autoPlay: true,
        navigation: false,
        navigationText: true,
        pagination: true,
      });
    $().UItoTop({ easingType: 'easeOutQuart' });	
  });
 $("span.menu").click(function() {
                $("ul.nav1").slideToggle(300, function() {
                  // Animation complete.
                });
  });

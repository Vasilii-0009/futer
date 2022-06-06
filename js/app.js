$(function () {
   let header = $('#header');
   let intro = $('#intro');
   let introH = intro.innerHeight();
   let windowH = $(window).scrollTop();

   $(window).on("scroll load resize", function () {
      introH = intro.innerHeight()
      windowH = $(this).scrollTop()
      if (windowH > introH) {
         header.addClass("fixed");
      }
      else {
         header.removeClass("fixed");
      }
   });
   //burger
   let burger = $("#burger");
   let nav = $("#nav");

   burger.on("click", function (item) {
      item.preventDefault()

      nav.toggleClass("show")
   });
   //smoth scroll
   let scroll = $('[data-scroll]')

   scroll.on("click", function (item) {
      item.preventDefault()

      let elementId = $(this).data("scroll");
      let elementOffset = $(elementId).offset().top;

      $("html, body").animate({
         scrollTop: elementOffset - 90
      }, 700);
   })

   //slick
   $("#slick").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      dots: true,

   });






})
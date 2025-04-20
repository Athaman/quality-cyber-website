$(function (event) {
  $('.page-scroll a').bind('click', function () {
    var $anchor = $(this);
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top,
        },
        1500,
        'easeInOutExpo'
      );
  });
});

document.addEventListener('scroll', (event) => {
  if ($('.navbar').offset().top > 50) {
    console.log('nav gone');
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
});

$(function (event) {
  $('.page-scroll a').bind('click', function (e) {
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
    $('.navbar-toggle').click();
    e.preventDefault();
  });
});

document.addEventListener('scroll', (event) => {
  if ($('.navbar').offset().top > 50) {
    $('.navbar-fixed-top').addClass('top-nav-collapse');
  } else {
    $('.navbar-fixed-top').removeClass('top-nav-collapse');
  }
});

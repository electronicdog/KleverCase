$(window).scroll(function() {
    if ($(this).scrollTop() > 400) {
        $( ".site-header .background" ).fadeIn();
    } else {
        console.log('there');
        $( ".site-header .background" ).fadeOut();
    }
});

$('button').click(function() {
  $(this).toggleClass('expanded').siblings('div').slideToggle();
});
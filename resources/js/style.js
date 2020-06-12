// SCROLLIFY
$(function(){
  $.scrollify({
    section: ".scrollify",
    setHeights: false,
    updateHash: false,
  });
});

//HAMBURGER MENU
function closeMenu() {
  document.getElementById('hamburger').style.height = "0%";
}
function openMenu() {
  document.getElementById('hamburger').style.height = "100%";
}

//SMOOTH SCROLL

$(function(){
  $('.menu-item a').on('click', function(){
    $('html,body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    },500);
    return false;
    });
});

//STICKY MENU

$(window).on('scroll', function(){
  if($(window).scrollTop()){
            $('nav').addClass('sticky');
  }else {
      $('nav').removeClass('sticky');
  }
});

// MIXITUP
var mixer = mixitup('.grid-work-container');

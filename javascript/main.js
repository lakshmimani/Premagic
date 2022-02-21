const players = Array.from(document.querySelectorAll('.player')).map(p => new Plyr(p));

function scroll(btn, target) {
  $(document).on('click', btn, function(e) {
    $('html, body').animate({
      scrollTop: ($(target).offset().top - 100)
    }, 1000);
  });
}

scroll('.js-download', '.lead-form');
scroll('.video', '.video-section');
scroll('.how-it-works', '#how-it-works');
scroll('.demo-section', '#demo-section');
scroll('.client-experience', '#client-experience');
scroll('.testimonials', '#client-video');


$(document).on('click', '.mobile-nav .list-item', function() {
  $('#menu-toggle input').prop('checked', false);
  $('body').css('position', 'initial');
});

$(document).on('click', '#menu-toggle input', function() {
  if($('#menu-toggle input').is(':checked')) {
    $('body').css('position', 'fixed');
  } else {
    $('body').css('position', 'initial');
  }
});


// how it works desktop
function processSteps(slides, tabItem) {
  var slideIndex = 0;
  $(slides).hide();
  var firstSlide = $(slides)[0];
  $(firstSlide).show();
  tabItem.on('click', function() {
    slideIndex = $(this).index();
    $(slides).each( function() {
      $(this).hide();
    });
    slides.eq(slideIndex).show();
    $(tabItem).filter('.active').removeClass('active');
    tabItem.eq(slideIndex).addClass('active');
  });
}

var selectionSlides = $('.selection-process .slide');
var selectionTabItem = $('.selection-process .process-heading');

var albumSlides = $('.signature-album .slide');
var albumTabItem = $('.signature-album .process-heading');

processSteps(selectionSlides, selectionTabItem);
processSteps(albumSlides, albumTabItem);

$('#js-view-features').click(function() {
  // $('.features').css({'height': '380px', 'transition-timing-function': 'cubic-bezier(0.1, 0.1, 1.0, 1.0)'});
  $('.features').addClass('open');
  $('#js-hide-features').css('display','block')
  $('#js-view-features').css('display','none')
});

$('#js-hide-features').click(function() {
  $('.features').removeClass('open');
  $('#js-view-features').css('display','block')
  $('#js-hide-features').css('display','none')
});

$(window).scroll(function(e){ 
  var $el = $('.nav-container-fixed'); 
  var isPositionFixed = ($el.css('position') == 'fixed');
  if ($(this).scrollTop() > 700 && !isPositionFixed){ 
    $el.addClass('fixed-navbar');
    $('.nav-container-top').css('display', 'none')
  }
  if ($(this).scrollTop() < 700 && isPositionFixed){
    $el.removeClass('fixed-navbar');
    $('.nav-container-top').css('display', 'block')
  } 
});


$('.how-it-works-desktop ul.how-it-works-tabs li').click(function() {
  var tab_id = $(this).attr('data-tab');

  $('ul.how-it-works-tabs li').removeClass('current');
  $('.tab-content').removeClass('current');

  $(this).addClass('current');
  $(".how-it-works-desktop #"+tab_id).addClass('current');
})

$('.how-it-works-mobile ul.how-it-works-tabs li').click(function() {
  $('.how-it-works-mobile .selection-process, .how-it-works-mobile .signature-album').slick('unslick');
  var tab_id = $(this).attr('data-tab');
  $('ul.how-it-works-tabs li').removeClass('current');
  $('.tab-content').removeClass('current');
  $(this).addClass('current');
  $(".how-it-works-mobile #"+tab_id).addClass('current');
  $(".how-it-works-mobile #"+tab_id).slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
})


$(document).ready(function(){
  $('.how-it-works-mobile .selection-process, .how-it-works-mobile .signature-album').slick({
    arrows: false,
    dots: true,
    autoplay: true,
  autoplaySpeed: 2000
  });
});

function voice(){
  let utter = new SpeechSynthesisUtterance();
  utter.lang = 'hi-IN'
  utter.text = "Welcome to Portfolio. पोर्टफोलियो में आपका स्वागत है";
  utter.volume = '4';
  window.speechSynthesis.speak(utter);
}

function github(){
  window.open(
    "https://github.com/vivekgarrg", "_blank");
}
function twitter(){
  window.open(
    "https://twitter.com/vivekgarrg", "_blank");
}
function fb(){
  window.open(
    "https://www.instagram.com/vivekgarrg/", "_blank");
}
function lkdin(){
  window.open(
    "https://www.linkedin.com/in/vivekgarrg/", "_blank");
}
$(document).ready(function(){
    voice();
    
    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });

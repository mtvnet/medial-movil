

if ( navigator.serviceWorker ) {
  navigator.serviceWorker.register( '/medial-movil/' );
}

var solicitudesMat   = $('#solicitudes');
var verMaterial      = $('#ver_material');
var volverSolicitud  = $('#back_solicitudes');
var material         = $('#materiales');
var logo             = $('.logo-head');
var botonMenu        = $('#burger_menu');
var menu             = $('#menu');
var closeMenu        = $('#menu_close');
var cuerpo           = $('body');

botonMenu.on('click', function() {
    menu.removeClass('oculto');
    cuerpo.addClass('fijo');
    
});
closeMenu.on('click', function() {
    menu.addClass('oculto');
    cuerpo.removeClass('fijo');
   
});
verMaterial.on('click', function() {

    solicitudesMat.addClass('oculto');
    logo.addClass('oculto');
    material.removeClass('oculto');
    material.animate({ 
        opacity: 1
    }, 200 );

});
volverSolicitud.on('click', function() {

    solicitudesMat.removeClass('oculto');
    logo.removeClass('oculto');
    material.addClass('oculto');
    solicitudesMat.animate({ 
        opacity: 1
    }, 200 );

});
/*toggle ver más*/
/*$('.more').on("click", function (){

    colapsa = $(this).next('.collap');
    if ($(colapsa).height() == 15) {
       $(colapsa).addClass('extiende').animate({height: "100%"}, 'slow');
       }
    else if ($(colapsa).height() > 15) {
       $(colapsa).removeClass('extiende').animate({height: "15px"}, 'slow');
       }

});*/




$('.more').on("click", function (){

    var papaColapsa = $(this).parent('div');
    var titlesVersion = $(this).parent('div').hasClass('titles-versions');
    var colapsa = $(papaColapsa).children('.collap');
    var botonAction = $(this);
    var animateTime = 300;


    if(papaColapsa.hasClass() === titlesVersion){
      if(colapsa.height() === 0){
        autoHeightAnimate(colapsa, animateTime);
        botonAction.removeClass('btn-more');
        botonAction.addClass('btn-less');

      } else {
          colapsa.stop().animate({ height: '0px' }, animateTime);
          botonAction.removeClass('btn-less');
          botonAction.addClass('btn-more');
      }
    }
    else{
      if(colapsa.height() === 15){
        autoHeightAnimate(colapsa, animateTime);
        botonAction.removeClass('btn-more');
        botonAction.addClass('btn-less');
  
      } else {
          colapsa.stop().animate({ height: '15px' }, animateTime);
          botonAction.removeClass('btn-less');
          botonAction.addClass('btn-more');
      }
    }

});

  
  /* Function to animate height: auto */
  function autoHeightAnimate(element, time){
        var curHeight = element.height(), // Get Default Height
          autoHeight = element.css('height', 'auto').height(); // Get Auto Height
            element.height(curHeight); // Reset to Default Height
            element.stop().animate({ height: autoHeight }, time); // Animate to Auto Height
  }

/* toggle password login form */
const togglePassword = document.getElementById("toggle_password");

const showOrHidePassword = () => {
  const password = document.getElementById("password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
};
togglePassword.addEventListener("change", showOrHidePassword);




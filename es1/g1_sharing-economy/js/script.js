$( document ).ready(function() {
    
    $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000, "swing");
        return false;
      }
    }
  });
});
   
    
    console.log( "have fun to check our code! Proudly made with love" );
    
    $( "#YearRow .button" ).click(function( event ) {
        
        $("#YearRow .selected").removeClass("selected");
        x = $(this).data('id')        
        $("#sec-3_img-1").attr("src", "images/"+x);
        $(this).addClass("selected");    
        });
    
    $( "#Buttons-2 .button" ).click(function( event ) {
        
        $("#Buttons-2 .selected").removeClass("selected");
        x = $(this).data('id')        
        $("#sec-3_img-2").attr("src", "images/"+x);
        $(this).addClass("selected");    
        });
    
    $( "#Buttons-3 .button" ).click(function( event ) {
        
        $("#Buttons-3 .selected").removeClass("selected");
        x = $(this).data('id')        
        $("#sec-3_img-3").attr("src", "images/"+x);
        $(this).addClass("selected");    
         });
    
    $( "#Buttons-4 .button" ).click(function( event ) {
        
        $("#Buttons-4 .selected").removeClass("selected");
        x = $(this).data('id')        
        $("#sec-3_img-4").attr("src", "images/"+x);
        $(this).addClass("selected");    
         });
    
    $( "#Buttons-5 .button" ).click(function( event ) {
        
        $("#Buttons-5 .selected").removeClass("selected");
        x = $(this).data('id')        
        $("#sec-3_img-7").attr("src", "images/"+x);
        $(this).addClass("selected");    
         });
    
    
    
});
$(window).resize(function() {

  if ($(this).width() < 1400) {

    $('.nav').hide();

  } else {

    $('.nav').show();

    }

});

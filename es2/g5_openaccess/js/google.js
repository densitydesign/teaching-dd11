$( ".tastodue" ).click(function() {
  $( ".provatre" ).css( "visibility", "visible" );
  $( ".provadue" ).css( "visibility", "hidden" );
});

$( ".tastopienodue" ).click(function() {
  $( ".provadue" ).css( "visibility", "hidden" );
});

$( ".tastouno" ).click(function() {
  $( ".provadue" ).css( "visibility", "visible" );
  $( ".provatre" ).css( "visibility", "hidden" );
});

$( ".tas1" ).click(function() {
  $( "#Non_commercial" ).css( "visibility", "hidden" );
  $( "#No_CC" ).css( "visibility", "hidden" );
  $( "#Commercial" ).css( "visibility", "visible" );
  $( "#Livello_5" ).css( "visibility", "hidden" );
});

$( ".tas2" ).click(function() {
  $( "#Commercial" ).css( "visibility", "hidden" );
  $( "#No_CC" ).css( "visibility", "hidden" );
  $( "#Non_commercial" ).css( "visibility", "visible" );
  $( "#Livello_5" ).css( "visibility", "hidden" );
});

$( ".tas3" ).click(function() {
  $( "#Commercial" ).css( "visibility", "hidden" );
  $( "#No_CC" ).css( "visibility", "visible" );
  $( "#Non_commercial" ).css( "visibility", "hidden" );
  $( "#Livello_5" ).css( "visibility", "hidden" );
});

$( ".tas4" ).click(function() {
  $( "#Commercial" ).css( "visibility", "hidden" );
  $( "#No_CC" ).css( "visibility", "hidden" );
  $( "#Non_commercial" ).css( "visibility", "hidden" );
  $( "#Livello_5" ).css( "visibility", "visible" );
});

$( ".tastoneg" ).click(function() {
  $( ".colorati" ).css( "visibility", "hidden" );
  $( ".negativi" ).css( "visibility", "visible" );
});

$( ".tastocol" ).click(function() {
  $( ".colorati" ).css( "visibility", "visible" );
  $( ".negativi" ).css( "visibility", "hidden" );
});

$( ".opacvuoto" ).click(function() {
  $( "#oasub" ).css( "visibility", "hidden" );
  $( "#subs" ).css( "visibility", "hidden" );
  $( "#opac" ).css( "visibility", "visible" );
});

$( ".subsvuoto" ).click(function() {
  $( "#oasub" ).css( "visibility", "hidden" );
  $( "#opac" ).css( "visibility", "hidden" );
  $( "#subs" ).css( "visibility", "visible" );
});

$( ".oasubvuoto" ).click(function() {
  $( "#oasub" ).css( "visibility", "visible" );
  $( "#subs" ).css( "visibility", "hidden" );
  $( "#opac" ).css( "visibility", "hidden" );
});

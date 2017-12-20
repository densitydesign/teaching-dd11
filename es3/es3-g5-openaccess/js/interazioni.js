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

$( ".tastonegative" ).click(function() {
  $( ".colorati" ).css( "visibility", "hidden" );
  $( ".negativi" ).css( "visibility", "visible" );
});

$( ".tasto2" ).click(function() {
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






$( ".tastoo" ).click(function() {
  $( ".oa" ).css( "visibility", "visible" );
  $( ".sub" ).css( "visibility", "hidden" );
  $( ".os" ).css( "visibility", "hidden" );
});

$( ".tastos" ).click(function() {
  $( ".oa" ).css( "visibility", "hidden" );
  $( ".sub" ).css( "visibility", "visible" );
  $( ".os" ).css( "visibility", "hidden" );
});

$( ".tastoos" ).click(function() {
  $( ".oa" ).css( "visibility", "hidden" );
  $( ".sub" ).css( "visibility", "hidden" );
  $( ".os" ).css( "visibility", "visible" );
});





$( ".tastocopyopen" ).click(function() {
  $( ".copyright-open" ).css( "visibility", "visible" );
  $( ".copyright-all" ).css( "visibility", "hidden" );
  $( ".nocc" ).css( "visibility", "hidden" );
  $( ".notopen" ).css( "visibility", "hidden" );
});

$( ".tastocopynotopen" ).click(function() {
  $( ".copyright-open" ).css( "visibility", "hidden" );
  $( ".copyright-all" ).css( "visibility", "hidden" );
  $( ".nocc" ).css( "visibility", "hidden" );
  $( ".notopen" ).css( "visibility", "visible" );
});

$( ".tastocopynocc" ).click(function() {
  $( ".copyright-open" ).css( "visibility", "hidden" );
  $( ".copyright-all" ).css( "visibility", "hidden" );
  $( ".nocc" ).css( "visibility", "visible" );
  $( ".notopen" ).css( "visibility", "hidden" );
});

$( ".tastocopyall" ).click(function() {
  $( ".copyright-open" ).css( "visibility", "hidden" );
  $( ".copyright-all" ).css( "visibility", "visible" );
  $( ".nocc" ).css( "visibility", "hidden" );
  $( ".notopen" ).css( "visibility", "hidden" );
});





$( ".tastohealth" ).click(function() {
  $( "#Health-science" ).css( "visibility", "visible" );
  $( "#Social-science" ).css( "visibility", "hidden" );
  $( "#Life-science" ).css( "visibility", "hidden" );
  $( "#Physical-science" ).css( "visibility", "hidden" );
  $( "#Tasti-materie" ).css( "visibility", "hidden" );
});

$( ".tastophysical" ).click(function() {
  $( "#Health-science" ).css( "visibility", "hidden" );
  $( "#Social-science" ).css( "visibility", "hidden" );
  $( "#Life-science" ).css( "visibility", "hidden" );
  $( "#Physical-science" ).css( "visibility", "visible" );
  $( "#Tasti-materie" ).css( "visibility", "hidden" );
});

$( ".tastosocial" ).click(function() {
  $( "#Health-science" ).css( "visibility", "hidden" );
  $( "#Social-science" ).css( "visibility", "visible" );
  $( "#Life-science" ).css( "visibility", "hidden" );
  $( "#Physical-science" ).css( "visibility", "hidden" );
  $( "#Tasti-materie" ).css( "visibility", "hidden" );
});

$( ".tastolife" ).click(function() {
  $( "#Health-science" ).css( "visibility", "hidden" );
  $( "#Social-science" ).css( "visibility", "hidden" );
  $( "#Life-science" ).css( "visibility", "visible" );
  $( "#Physical-science" ).css( "visibility", "hidden" );
  $( "#Tasti-materie" ).css( "visibility", "hidden" );
});
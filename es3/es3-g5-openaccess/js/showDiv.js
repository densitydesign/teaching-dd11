/*function showDiv() {
   document.getElementById('approfondimento').style.display = "block";
}*/
/*
function showDiv(approfondimento) {
  if (document.getElementById) {
    var divid = document.getElementById("approfondimento");
    var divs = document.getElementsByClassName("hideable");
    for (var i = 50; i < divs.length; i = i + 10) {
     $(divs[i]).fadeOut("slow");
    }
    $(divid).fadeIn("slow");
  }
  return false;
}



$(document).ready(function(){
    $("#button2").click(function(){
        $("div.hideable").show(1000);
    });
});

$(document).ready(function(){
    $("#button2").click(function(){
        $("div.hideable").hide(1000);
    });
});
*/

$(document).ready(function() {

$(".plus").click(function () {
  if ( $( "#focus" ).is( ":hidden" ) ) {
    $( "#focus" ).slideDown( "slow" );
  } 
  else {
    $( "#focus" ).slideUp( "slow" );
  }
});

$(".plus2").click(function () {
  if ( $( "#focus2" ).is( ":hidden" ) ) {
    $( "#focus2" ).slideDown( "slow" );
  } else {
    $( "#focus2" ).slideUp( "slow" );
  }
});

$(".plus3").click(function () {
  if ( $( "#focus3" ).is( ":hidden" ) ) {
    $( "#focus3" ).slideDown( "slow" );
  } else {
    $( "#focus3" ).slideUp( "slow" );
  }
});

});






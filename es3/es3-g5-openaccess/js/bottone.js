$( ".plus" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform", "rotate(90deg)");
    } else {
        $(this).css("transform", "" );
    }
});

$( ".plus3" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("transform", "rotate(90deg)");
    } else {
        $(this).css("transform", "" );
    }
});
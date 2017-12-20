$(document).ready(function(){
    
 console.log("ciao")
 
 $(".HideOnOver").on("mouseenter", function() {
        d3.select(this).transition().duration(300).style('opacity', 0)
    }).on("mouseleave", function (d, i){
        d3.select(this).transition().duration(300).style('opacity', 1)
    });
  
});
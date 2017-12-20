$(document).ready(function(){
    
 console.log("ciao")
 
 $(".animate").on("mouseenter", function() {
        var x = d3.select(this).attr("data-keyword");
        d3.selectAll(".neutral, ." + x).transition().duration(300).style("opacity", "0.3");
        
}).on("mouseleave", function() {
        var x = d3.select(this).attr("data-keyword");
        d3.selectAll(".neutral, ." + x).transition().duration(300).style("opacity", "1");
});
    
    $(".neutral").on("mouseenter", function() {
        d3.selectAll(".animate").transition().duration(300).style("opacity", "0.3");
        
}).on("mouseleave", function() {
        d3.selectAll(".animate").transition().duration(300).style("opacity", "1");
});
    });


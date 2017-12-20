$(document).ready(function(){
    
    
    console.log("...Intanto il js viene letto");
    
    
    	$(".bar").on("mouseenter", function(){
            d3.select(this).classed("bar", false);
            d3.selectAll(".bar, .rest").transition().duration(300).style("opacity", 0.2);
        }).on("mouseleave", function(){
            d3.selectAll(".bar, .rest").transition().duration(300).style("opacity", 1);
            d3.select(this).classed("bar", true);
        })
    
//        $(".ShowTextOnMouseOver").on("mouseover", function(){
//            
//            console.log();
//            d3.select(".ShowText").transition().duration(300).style('opacity', 0);
//            d3.select(this).select("text").classed("ShowText", true);
//            
//            
//        
//        });
    
    
     $(".ShowTextOnMouseOver").on("mouseenter", function() {
            d3.select(this).select("text").transition().duration(300).style('opacity', 1);
            d3.select(this).select("text").classed("ShowText", true);
    }).on("mouseleave", function (d, i){
            d3.select(this).select("text").transition().duration(300).style('opacity', 0);
            d3.select(this).select("text").classed("ShowText", false);
    });
    
//        $(".on").click(function(){ 
//            d3.select(this).classed("st1", true);
//        });
//        $(".menu rect").on("mouseover", function(){
//            d3.select(this).transition()
//                .ease('cubic-out')
//                .duration('200')
//                .style('fill', '#FFFFFF')}).on("mouseout", function(){
//            d3.select(this).transition()
//                .ease('cubic-out')
//                .duration('200')
//                .style('fill', '#4F4F4F');
//        });
     
});
    
    
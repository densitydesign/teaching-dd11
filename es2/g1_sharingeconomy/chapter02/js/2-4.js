$(document).ready(function(){
    	$(".menu").click(function(){
            var x = d3.select(this).attr("data-target");
            d3.select("." + x).classed("st1", false);
        });
        $(".on").click(function(){ 
            d3.select(this).classed("st1", true);
        });
        $(".menu rect").on("mouseover", function(){
            d3.select(this).transition()
                .ease('cubic-out')
                .duration('200')
                .style('fill', '#FFFFFF')}).on("mouseout", function(){
            d3.select(this).transition()
                .ease('cubic-out')
                .duration('200')
                .style('fill', '#4F4F4F');
        });
     
});
    
    
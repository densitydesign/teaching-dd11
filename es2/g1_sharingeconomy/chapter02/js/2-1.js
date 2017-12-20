$(document).ready(function(){
    	$(".menu").click(function(){
            d3.selectAll(".active_link").classed("active_link", false);
            d3.select(this).classed("active_link", true)
            var x = d3.select(this).attr("data-target");
            d3.selectAll(".viz").classed("st8", true);
            d3.select("." + x).classed("st8", function (d, i) {
			return !d3.select(this).classed("st8");
        });
        });      
        $(".label").on("mouseover", function(){
            d3.select(this).transition()
                .ease('cubic-out')
                .duration('200')
                .style('opacity', '1')}).on("mouseout", function(){
            d3.select(this).transition()
                .ease('cubic-out')
                .duration('200')
                .style('opacity', '0');
        });
        
});
$(document).ready(function(){
    	$(".author").click(function(){
            var y = d3.select(this).attr("data-target");
            d3.selectAll(".scheda").classed("st8", true);
            d3.select("." + y).classed("st8", function (d, i) {
			return !d3.select(this).classed("st8");
        });
//        $(".author").on("mouseleave", function(){ 
//            var y = d3.select(this).attr("data-target");
//            d3.select("." + y).classed("st8", true);
//        });
//        $(".author").on("mouseover", function(){
//            var x = d3.select(this).attr("data-target");
//            d3.select(x).classed("st8", false)})
//            .on("mouseout", function(){
//            d3.select(this).transition()
//                .ease('cubic-out')
//                .duration('200')
//                .style('fill', '#4F4F4F');
//        });
//     
});
});
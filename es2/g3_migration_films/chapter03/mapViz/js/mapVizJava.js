$(document).ready(function(){
	$(".toggleLabels").click(function(){
		$(".toggleLabels").toggleClass("active")
		d3.selectAll("#scritte")
  			.classed("turnOff", function (d, i) {
			return !d3.select(this).classed("turnOff");
  		});
	});
	$(".toggleDestination").click(function(){
		$(".toggleDestination").toggleClass("active")
		d3.selectAll("#destination")
  			.classed("turnOff", function (d, i) {
			return !d3.select(this).classed("turnOff");
  		});
	});
	$(".toggleOrigin").click(function(){
		$(".toggleOrigin").toggleClass("active")
		d3.selectAll("#origin")
  			.classed("turnOn", function (d, i) {
			return !d3.select(this).classed("turnOn");
  		});
	});

});
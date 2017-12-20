$(document).ready(function(){
    
    
   
    
    
    	$(".button").click(function(){
            
            var x = d3.select(this).attr("id");
            
            d3.select(".clicked").classed("clicked", false);
            d3.select(this).classed("clicked", true);
            
            d3.select(".showyear").classed("showyear", false);
            d3.select("." + x).classed("showyear", true);
        });
    
    
    
     $(".ShowTextOnMouseOver").on("mouseenter", function() {
            d3.select(this).select("text").transition().duration(300).style('opacity', 1);
            d3.select(this).select("text").classed("ShowText", true);
    }).on("mouseleave", function (d, i){
            d3.select(this).select("text").transition().duration(300).style('opacity', 0);
            d3.select(this).select("text").classed("ShowText", false);
    });
    
    $(".wordbutton").click(function(){
            
            
        var x = ( "images/" + d3.select(this).text() + ".png");
        
        
            d3.select(".clicked-3").classed("clicked-3", false);
        
            d3.select(".clicked-2").classed("clicked-3", true);
            d3.select(".clicked-3").classed("clicked-2", false);
        
            d3.select(".clicked-1").classed("clicked-2", true);
            d3.select(".clicked-2").classed("clicked-1", false);
        
            d3.select(this).classed("clicked-1", true);
            
            var img_3 = (d3.select(".TriangleContainer-2").attr("src"));
            d3.select(".TriangleContainer-3").attr("src",img_3);
        
            var img_2 = (d3.select(".TriangleContainer-1").attr("src"));
            d3.select(".TriangleContainer-2").attr("src",img_2);
        
            
            d3.select(".TriangleContainer-1").attr("src",x);
        

            console.log(img_3);
    });
    

     
});
    
    
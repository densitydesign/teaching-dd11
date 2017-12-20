function clu2() {
       var image = document.getElementById('Clu1');
    var image2 = document.getElementById('Clu2');
	var image3 = document.getElementById('Clu3');
	var image4 = document.getElementById('Clu4');
	var image5 = document.getElementById('Clu5');
	var image6 = document.getElementById('Clu6');
		 
	 
	  if (image2.src.match("assets/images/Clu1/cluster2on.svg")) {
		     if (image.src.match("assets/images/Clu1/cluster1off.svg")) {
				 image2.src= "assets/images/Clu1/cluster2off.svg";
			 }
	   }
	   else
	   {
		    image2.src= "assets/images/Clu1/cluster2on.svg";
	   }
	   
    if (image2.src.match("assets/images/Clu1/cluster2on.svg")) {
         if (image.src.match("assets/images/Clu1/cluster1on.svg")) {
			  image.src= "assets/images/Clu1/cluster1off.svg";
			   image3.src= "assets/images/Clu1/cluster3off.svg";
			    image4.src= "assets/images/Clu1/cluster4off.svg";
				 image5.src= "assets/images/Clu1/cluster5off.svg";
				  image6.src= "assets/images/Clu1/cluster6off.svg";
		 }
    } 
}
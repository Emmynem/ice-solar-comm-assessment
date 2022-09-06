jQuery(window).on('load', function(){
		setTimeout(function() { 
	        	$(".popup").removeClass("hide-popup");
	    	}, 1000);
	});

$(document).ready(function(){
	$(".hamburger").on("click", function(){
		$(".nav-list").toggleClass("open");
	});

	$(".popup-close").on("click", function(){
		$(".popup").addClass("hide-popup");
	})

	
});


// $(window).load(function() {
// 	    setTimeout(function() { 
// 	        	$(".popup").removeClass("hide-popup");
// 	    	}, 1000);
// 	});
// jQuery(window).on('load', function(){

// });
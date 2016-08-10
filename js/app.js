
$(document).ready(function(){

	// created a variable for determining if x is pressed and another one to know if mouse is in Ryu
	
	var isXPressed   = false
	var isMouseInRyu = false
    $(".ryu").mouseenter(function(){
    	
    	// if x is not pressed and mouse is in Ryu then ryu ready appears
    	
    	isMouseInRyu = true
    	if (!isXPressed) {
    		$(".ryu-still").hide();
        	$(".ryu-ready").hide();
    		$(".ryu-throwing").hide();
    		$(".ryu-cool").hide();
    		$(".ryu-ready").show();
    	}
    })
    .mouseleave(function() {
    	
    	// if x is not pressed and mouse leaves Ryu then ryu still appears
    	
    	isMouseInRyu = false
    	if (!isXPressed) {
    		$(".ryu-still").hide();
        	$(".ryu-ready").hide();
    		$(".ryu-throwing").hide();
    		$(".ryu-cool").hide();
    		$(".ryu-still").show();
    	}
    })
    .mousedown(function(){
    	
    	// if x is not pressed and mouse is pressed on Ryu then ryu throwing appears, play hadouken happens and hadouken animation occurs
    	
    	if (!isXPressed) {
    		$(".ryu-still").hide();
        	$(".ryu-ready").hide();
    		$(".ryu-throwing").hide();
    		$(".ryu-cool").hide();
    		playHadouken();
    		$(".ryu-throwing").show();
	        $(".hadouken").finish().show().animate(
	            {"left": "1020px"},
	            500,
	            function(){
	                $(".hadouken").hide();
	                $(".hadouken").css('left', "520px");
	            });
	    }
    })
    .mouseup(function(){
    	
    	// if x is not pressed and mouse is no longer pressed on Ryu then ryu ready appears
    	
    	if (!isXPressed) {
    		$(".ryu-still").hide();
        	$(".ryu-ready").hide();
    		$(".ryu-throwing").hide();
    		$(".ryu-cool").hide();
    		$(".ryu-ready").show();
    	}
    });
    
    // effect after pressing x
    
    $("body").keydown(function(event){

    	// if x is pressed then Ryu cool shows

    	if (event.keyCode === 88){
    		isXPressed = true
    		$(".ryu-ready").hide();
    		$(".ryu-still").hide();
    		$(".ryu-throwing").hide();
    		$(".ryu-cool").show();
    	}
    })

    .keyup(function(event){

    	// if x is pressed and mouse is on Ryu then ryu ready appears, otherwise ryu still appears
    	if(event.keyCode === 88){
    		isXPressed = false
    		$(".ryu-cool").hide();
    		$(".ryu-ready").hide();
    		$(".ryu-throwing").hide();
    		if (isMouseInRyu) {
    			$(".ryu-ready").show();
    		} else {
    			$(".ryu-still").show();
    		}	
    	}
    });	
});

function playHadouken() {
    $("#hadouken-sound")[0].volume = 0.5;
    $("#hadouken-sound")[0].load();
    $("#hadouken-sound")[0].play();
}



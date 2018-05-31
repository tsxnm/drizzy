$(document).ready(function() {
	
	$("#strip-button").click(function() {
    	$(".outfit").fadeOut();
    	$("#body").fadeIn();
	})

	$("#s1").click(function() {
		$("#body").hide();
  		$(".outfit").hide();
    	$("#o1").show();
	})

	$("#s2").click(function() {
		$("#body").hide();
  		$(".outfit").hide();
  		$("#o2").show();
	})

	$("#s3").click(function() {
		$("#body").hide();
  		$(".outfit").hide();
  		$("#o3").show();
	})

	$("#s4").click(function() {
		$("#body").hide();
  		$(".outfit").hide();
    	$("#o4").show();
	})

	$("#s5").click(function() {
		$("#body").hide();
  		$(".outfit").hide();
    	$("#o5").show();
	}) 

})
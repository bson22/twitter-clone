$(document).ready(function() {
	$("#tweet-controls").hide();

	$("#tweet-content > .tweet-compose").focusin(function() {
		$("#tweet-controls").show();
		$(this).css("height", "5em");
	}); //shows tweet button and expands height for the tweet window

	$("#tweet-content > .tweet-compose").focusout(function(){
		$("#tweet-controls").hide();
		$(this).css("height", "2.5em")
	}); //hides tweet butotn and returns window to 2.5 em

	$(".tweet-compose").focusin(function() {
		$(this).css("height", "5em");
	}); //expands reply windows to 5em

	$(".tweet-compose").focusout(function() {
		$(this).css("height", "2.5em")
	}); //collapses reply windows to 2.5em

	$(".tweet-compose").keyup(function() {
		var charLen = $(this).val().length;
		var max = 140;
		var count = (max - charLen);
		console.log(count);
		$("#char-count").text(count);
	});
	

});


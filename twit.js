$(document).ready(function() {

	var handle = $("body p").first().text();
	


			$("#tweet-controls").hide();

			$("#tweet-content > .tweet-compose").focusin(function() {
				$("#tweet-controls").show();
				$(this).css("height", "5em");
			}); //shows tweet button and expands height for the tweet window

			$("#tweet-content > .tweet-compose").focusout(function(){
				if($("#char-count").text() == 140){
					$("#tweet-controls").hide();
					$("#tweet-content > .tweet-compose").css("height", "2.5em")
				};
			}); //hides tweet button and returns window to 2.5 em

			$(".reply >.tweet-compose").focusin(function() {
				$(this).css("height", "5em");
			}); //expands reply windows to 5em

			$(".reply > .tweet-compose").focusout(function() {
				$(this).css("height", "2.5em")
			}); //collapses reply windows to 2.5em

	

			$(".tweet-compose").on('input', function() { //.on('input'function() {}) updates the keycount when deleted.
				var charLen = $(this).val().length;
				var count = (140 - charLen);
				//	console.log(count);
				$("#char-count").text(count);
				if(count <= 10) {								//this if statement makes color red when character count is less than 10
					$("#char-count").css("color", "#C00");
				}
				else if (count > 10) {							//this else if makes the color go back to original grey of the character count if the count is greater than 10
					$("#char-count").css("color", "#999");
				};

				if (count < 0) { 								// step 4: removes button if count is less than 0 and brings it back if its greater than 0
					$(".button").attr("disabled", true);
				}
				else if(count > 0) {
					$(".button").removeAttr("disabled")
				};

			});

	



		var init = 	function(){

			$(".tweet").click(function() {
				$(this).find(".reply, .stats").slideDown();
			});
			$(".tweet").mouseleave(function(){
				$(this).find(".reply, .stats").slideUp();
			});
		};


	$("#tweet-submit").click(function(){ 
		var newTweetText = $(".tweet-compose").val();  				//creates var with content of the tweet-=compose
		var newTweetBox = $("#stream > .tweet").first().clone();	//creates var with the clone of the first .tweet div of the stream
		$(newTweetBox).find("p").first().text(newTweetText);		//finds p of the newTweenBox and replaces it with the var newTweetText
		$(newTweetBox).find("img").first().attr("src", "img/alagoon.jpg");	//finds first image of newTweetBox and replaces with the users image
		$(newTweetBox).find(".fullname").text(handle);				//finds .fullname and replaces with the var handle which is the users fullname
		$(newTweetBox).find(".username").text("@BSon22")
		$("#stream").prepend(newTweetBox);			//adds the clone to the stream
		$(".tweet-compose").val("");
		$("#char-count").text("140");
		init();				
	});

	init();

});


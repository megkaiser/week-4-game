// Turn crystals into buttons

$(document).ready(function(){

var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;
var total = 0;
var wins = 0;
var losses = 0;

var computerGuess = Math.floor(Math.random() * 101) + 19;
var winLossCheck = function() {
			if (total === computerGuess) {
				wins++;
				$("#wins").html("Wins: " + wins);
				$("#gameResult").html("You Won!");
				reset();
		} else if (total > computerGuess) {
			losses++;
			$("#losses").html("Losses: " + losses);
			$("#gameResult").html("You Lost");
			reset();
		}
}

function reset () {
			total = 0;
			computerGuess = Math.floor(Math.random() * 101) + 19;
			crystal1 = Math.floor(Math.random() * 12) + 1;
			crystal2 = Math.floor(Math.random() * 12) + 1;
			crystal3 = Math.floor(Math.random() * 12) + 1;
			crystal4 = Math.floor(Math.random() * 12) + 1;
			$(".num").html(computerGuess);
}

	$("#crystal1").on("click", function(){
		total += crystal1;
		$("#yourscore").html(total);
		console.log(crystal1);	
		winLossCheck();
	});	

	$("#crystal2").on("click", function(){
		total += crystal2
		$("#yourscore").html(total);
		console.log(crystal2);
		winLossCheck();	
	});

	$("#crystal3").on("click", function(){
		total += crystal3
		$("#yourscore").html(total);
		console.log(crystal3);
		winLossCheck();	
	});

	$("#crystal4").on("click", function(){
		total += crystal4
		$("#yourscore").html(total);
		console.log(crystal4);
		winLossCheck();	
	});

	$(".num").html(computerGuess);

});



// prevent crystals from generating the same number

// reset game
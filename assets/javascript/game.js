// Turn crystals into buttons

$(document).ready(function(){

var crystal1 = Math.floor(Math.random() * 12) + 1;
var crystal2 = Math.floor(Math.random() * 12) + 1;
var crystal3 = Math.floor(Math.random() * 12) + 1;
var crystal4 = Math.floor(Math.random() * 12) + 1;

var computerGuess = Math.floor(Math.random() * 102) + 19;


	$("#crystal1").on("click", function(){
		$("#yourscore").html(crystal1);
		console.log(crystal1);	
	});	

	$("#crystal2").on("click", function(){
		$("#yourscore").html(crystal2);
		console.log(crystal2);	
	});

	$("#crystal3").on("click", function(){
		$("#yourscore").html(crystal3);
		console.log(crystal3);	
	});

	$("#crystal4").on("click", function(){
		$("#yourscore").html(crystal4);
		console.log(crystal4);	
	});

	$(".num").html(computerGuess);

});


$(function(){
	$("#login").click(function(){
		$(".login").modal('show');
	});
	$(".login").modal({
		closable: true
	});
});

$(function(){
	$("#signup").click(function(){
		$(".signup").modal('show');
	});
	$(".signup").modal({
		closable: true
	});
});
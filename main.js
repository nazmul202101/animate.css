$(function(){
		$('#animateBtn').click(function(){
			animate('#section-0','bounce');
		});
	function animate(element,animation){
		$(element).addClass('animate'+animation);
		var wait=setTimeout(function(){
			$(element).removeClass('animate'+animation);
			},1000);
		};
	});
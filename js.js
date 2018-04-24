$(document).ready(function() { 
	$('#button').click( function(event){ 
		event.preventDefault(); 
		$('#black').fadeIn(400, 
		 	function(){ 
				$('#black').css('display', 'block');
				$('#tc').css('display', 'block');
				$('#veko1')
					.css('display', 'block')
					.animate({top: '-124px'}, 1000);
				$('#veko2')
					.css('display', 'block')
					.animate({top: '248px'}, 1000);
				$('#veko3')
					.css('display', 'block')
					.animate({top: '-124px'}, 1000);
				$('#veko4')
					.css('display', 'block')
					.animate({top: '248px'}, 1000);
				$('#sharingan').css('display', 'block');
				$('#sharingan2').css('display', 'block');
				$('#popup') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
				
	});
	var test = true;
	$('#but').click( function(){
				if( test ) {
					$('#veko1')
					.css('display', 'block')
					.animate({top: '0px'}, 1000);
				$('#veko2')
					.css('display', 'block')
					.animate({top: '155px'}, 1000);
				$('#veko3')
					.css('display', 'block')
					.animate({top: '-0px'}, 1000);
				$('#veko4')
					.css('display', 'block')
					.animate({top: '155px'}, 1000);
				test = false;
				} else {
					$('#veko1')
					.css('display', 'block')
					.animate({top: '-124px'}, 1000);
				$('#veko2')
					.css('display', 'block')
					.animate({top: '248px'}, 1000);
				$('#veko3')
					.css('display', 'block')
					.animate({top: '-124px'}, 1000);
				$('#veko4')
					.css('display', 'block')
					.animate({top: '248px'}, 1000);
					test = true;
				}
	});
	
	$('#black').click( function(){ 
		$('#popup')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none');
					$('#black').fadeOut(400);
					$('.vekoo').fadeOut(400);
					$('#sharingan').fadeOut(400);
					$('#sharingan2').fadeOut(400);
				}
			);
	});
});
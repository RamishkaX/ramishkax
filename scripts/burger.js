$(function(){
	var ac = false;
	$('.burger').click(function() {
		if (!ac) {
        	$('.header-ul').show(600);
			ac = true;
		}
		else {
			$('.header-ul').hide(600);
			ac = false;
		}
    })
})
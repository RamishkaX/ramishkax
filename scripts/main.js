$(document).ready(function(){
  	var ac = false;
	$("a[rel^='prettyPhoto']").prettyPhoto();
	$('.rekviziti').click(function() {
		if (!ac) {
			$('.rek').addClass("rekact");
			ac = true;
		}
		else {
			$('.rek').removeClass("rekact");
			ac = false;
		}
	})

    var act = false;
    $('.burger').click(function() {
        if (!act) {
            $('.header-ul').show(600);
            act = true;
        }
        else {
            $('.header-ul').hide(600);
            act = false;
        }
    })

    $('.call-me').click(function() {
        $('.popup').addClass("animate");
    })

    $('.close').click(function() {
        $('.popup').removeClass("animate");
    })
});
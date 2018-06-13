 function opencom(comid) {
        if (comid == "c1") {
            $('.'+comid).toggleClass('com-block');
        }

        else if (comid == "c2") {
            $('.'+comid).toggleClass('com-block');
        }
    }

    function add(postid) {
        if(postid == 'n1') {
            var col = $('#s1').text();
            col++;
            $('#s1').text(col);
        }
        else {
            var col = $('#s2').text();
            col++;
            $('#s2').text(col);
        }
        var name = $('#name').val();
        var text = $('#text').val();
        var com = '<div class="comment-block"><img class="img-responsive" src="../assets/if_user-alt_285645.png"><div class="us-name">'+name+'</div><p>'+text+'</p></div>'
        $('#'+postid).append(com);
    }

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

	var HeaderTop = $('.header').offset().top;

    $(window).scroll(function(){
        if( $(window).scrollTop() > HeaderTop ) {
            $('.header').css({position: 'fixed', top: '0px', left: '0px', right: '0px', zIndex: '1'});
        } else {
            $('.header').css({position: 'static'});
        }
    });
});
$(function(){
	$('.call-me').click(function() {
        $('.popup').addClass("animate");
    })

    $('.close').click(function() {
        $('.popup').removeClass("animate");
    })
})
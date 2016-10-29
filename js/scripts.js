$(document).ready(function(){
   
   $('.js--scroll-to-gallery').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-gallery').offset().top-10}, 1200);
       
	});
    
     $('.js--scroll-to-contact').click(function(){
		$('html, body').animate({scrollTop: $('.js--section-contact').offset().top}, 1200);
       
	});
    
    $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top-20
            }, 1000);
            return false;
        }
    }
});
    
});
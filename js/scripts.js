
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-86949618-1', 'auto');
  ga('send', 'pageview');



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
                 scrollTop: target.offset().top-28
            }, 1000);
            return false;
        }
    }
});
   
    
});
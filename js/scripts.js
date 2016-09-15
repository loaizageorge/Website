$(document).ready(function(){
var message = "";

$("#sendMessage").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "https://formspree.io/loaizageorge@gmail.com", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});
    
    var copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});
    
});
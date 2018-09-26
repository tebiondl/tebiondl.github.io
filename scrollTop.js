$(document).ready(function(){

    $('.goUp').click(function(){
        $('body, html').animate({
            scrollTop: '0px'
        });
    });

    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
          $('.goUp').slideDown(300);

        }else{
          $('.goUp').slideUp(300);
        }
     });

});
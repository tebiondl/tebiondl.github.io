$(document).ready(function () {

    $('.goUp').click(function () {
        $('body, html').animate({
            scrollTop: '0px'
        });
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.goUp').slideDown(300);

        } else {
            $('.goUp').slideUp(300);
        }
    });

    var x = 0;
    var y = 0;

    $(".navSearchIcon").click(() => {

        $(".no-word").show();

        if (x == 0) {
            $(".navSearch").show();
            x = 1;      
            console.log(x);
        } else {
            $(".navSearch").hide();
            x = 0;
            console.log(x);
        }

    });

    $(".navsuperpos").click(() => {
        
            $(".no-word").hide();
                 
        });

        $(".close-search-nav").click(() => {

            $(".no-word").show();
    
        });






});
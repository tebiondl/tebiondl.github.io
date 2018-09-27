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

    $(".navSearchIcon").click(() => {
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



    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }


});
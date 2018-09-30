$(document).ready(function () {

    $('.sidenav').sidenav();

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
    var z = 0;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        z = 1;
    }
    console.log(x);
    console.log(y);

    $(".navSearchIcon").click(() => {

        if (z == 0) {
            $(".no-word").fadeIn();
            y = 0;

            if (x == 0) {
                $(".navSearch").fadeIn();
                x = 1;
                console.log(x);
            } else {
                $(".navSearch").fadeOut();
                x = 0;
                console.log(x);
            }
        }

    });

    $(".navsuperpos").click(() => {
        if (z == 0) {
            if (y == 0) {
                $(".no-word").hide();
                y = 1;
            } else {
                $(".no-word").show();
                y = 0;
            }
        }

    });

    $("#word").click(() => {
        if (z == 0) {
            if (y == 0) {
                $(".no-word").hide();
                y = 1;
            } else {
                $(".no-word").show();
                y = 0;
            }
        }

    });

    console.log("#search");




});
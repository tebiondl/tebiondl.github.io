$(document).ready(function () {

    $('.sidenav').sidenav();

    $(document).ready(function(){
        $('.modal').modal();
      });

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
                /*removeHighlight();*/
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

    
    /*$("#word").click(() => {
        if (z == 0) {
            if (y == 0) {
                $(".no-word").hide();
                y = 1;
            } else {
                $(".no-word").show();
                y = 0;
            }
        }

    });*/

    
    

    var w = new Hilitor("content");

    function highlight() {
        var search = document.getElementById("searchwords").value;
        if (search.length > 0) w.apply(search)
        else removeHighlight();
        document.getElementById("searchwords").value = "";
    }

    function removeHighlight() {
        w.remove();
    }

    searchwords.addEventListener("keydown", function (e) {
        var a = e.key;
        if(a == "Enter"){
            
            console.log("#searchwords");
            console.log("hola");

           highlight();
           $(".navSearch").fadeOut();
           x = 0;
           
        }
    });

    function highlight1() {
        var search1 = document.getElementById("searchwords1").value;
        if (search1.length > 0) w.apply(search1)
        else removeHighlight();
        document.getElementById("searchwords1").value = "";
    }

    searchwords1.addEventListener("keydown", function (e) {
        var b = e.key;
        if(b == "Enter"){

           highlight1();
           x = 0;
           $('#modal1').modal('close');
    
        }
    });


});

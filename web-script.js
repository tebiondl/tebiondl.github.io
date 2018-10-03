$(document).ready(function () {

    $('.sidenav').sidenav();

    $(document).ready(function () {
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

    z=0;

    var x = 0;
    var y = 0;
    var z = 0;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        z = 1;
    }
    

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
        if (a == "Enter") {

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
        if (b == "Enter") {

            highlight1();
            x = 0;
            $('#modal1').modal('close');

        }
    });


    if(z==0){
        $(".slide2").remove();
        $(".slope1").remove();
        $(".slide2").remove();
        z=1;
    }else{
        $(".slide1").remove();
        $(".slope").remove();
        $(".slide1").remove();
        z=0;
    }

});

function changeColor(text) {
    text.style.color = "#4973FF";
    text.style.textDecoration = "underline";
}

function noColor(text) {
    text.style.color = "white";
    text.style.textDecoration = "none";
}



jQuery(document).ready(function ($) {

    var r = 0;

    $(".toggle--btn").click(() => {

        console.log("hola");

        if (r == 1) {
            r = 0;
            console.log("hola2");
            clearInterval(a);

        } else {
            r = 1;
            console.log("hola1");
            a = setInterval(function () {
                moveRight();

                console.log(r);
            }, 3000);

        }


    });




    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});

var v = 0;

function navAppear(){
   
    var x = document.getElementById("searchBar");
    
    
    if (v == 0) {
        x.style.display = "block";
        v=1;
        console.log(v);
    } else {
        x.style.display = "none";
        v=0;
        console.log(v);
    }
}


document.addEventListener("DOMContentLoaded", function(){
    getStars();
});

function getStars(){
loadJSON('https://api.github.com/repos/tebiondl/tebiondl.github.io',
         function(data) { console.log(data); },
         function(xhr) { console.error(xhr); }
   );
}


function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    var myParsed = JSON.parse(xhr.responseText);
                     document.getElementById("getStars").innerHTML = "Las estrellas que tengo en mi repositorio de github son "+myParsed.stargazers_count;
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}










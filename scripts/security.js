$(function () {

    // <!-- _____________________________ sidebar vertical navbar change _____________________________________________________________ -->

    // var a = $(window).width();
    var a = window.innerWidth;

    if (a < 992) {
        $(".vertical-navbar-area").addClass("on");
        $(".sidebar").removeClass("on");
    } else {
        $(".vertical-navbar-area").removeClass("on");
        $(".sidebar").addClass("on");
    }

    $(window).resize(function () {
        // var a = $(window).width();
        var a = window.innerWidth;
        // console.log(a);
        if (a < 992) {
            $(".vertical-navbar-area").addClass("on");
            $(".sidebar").removeClass("on");
        } else {
            $(".vertical-navbar-area").removeClass("on");
            $(".sidebar").addClass("on");
        }
    });

    // <!-- _____________________________ vertical-navbar movement _____________________________________________________________ -->

    var navbar = $("#nav");
    var item_index = 0;
    var length = 0;

    $("#NavRightButton").click(function () {

        var nav_length = $("#nav").width();
        var scroll_length = $("#nav .nav").width();
        var fark = scroll_length - nav_length;

        if (item_index == 0 || length <= fark) {

            var nav_item = $("#nav .nav-item").eq(item_index);
            length = length + nav_item.width() + 30;
            $("#nav").animate({
                scrollLeft: length
            }, 1000);
            item_index++;

        }
        else {

            $("#nav").animate({
                scrollLeft: -length
            }, 1000);
            item_index = 0;
            length = 0;

        }
    });

    navbar.find(".nav-item .nav-link").click(function () {

        $(this).addClass("active");
        $(this).parent().siblings().find(".nav-link").removeClass("active");

    });

    // <!-- _____________________________ active class for current navbar _____________________________________________________________ -->

    var currentLocation = location.href;
    var menuItem = document.querySelectorAll('.nav-link');
    var menuLength = menuItem.length;

    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "nav-link active";

        }
    }

    // <!-- _____________________________ active olanı ortalamaya çalışma _____________________________________________________________ -->


    var active_element = $("#nav .nav-item").find(".active");
    var kaydir = 0;
    if (a < 992) {
        var active_elementWidth = active_element.width();
        var active_elementSol = active_element.offset().left;
        var kaydir = (active_elementSol - a / 2) + active_elementWidth / 2;

        $("#nav").animate({
            scrollLeft: kaydir
        }, 1000);
    }

    // <!-- _____________________________ active position on resizing _____________________________________________________________ -->

    var rtime;
    var timeout = false;
    var delta = 200;

    $(window).resize(function () {
        rtime = new Date();
        // console.log(rtime);
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;

            // alert(a);
            c = window.innerWidth;
            b = a;
            a = window.innerWidth;
            // sayfa büyüdü
            if (c > b) {
                // alert("sayfa büyüdü");
                // alert("şimdiki genişlik = " + a);
                // alert("önceki genişlik = " + b);
                // alert("a-b = " + (a - b));
                // alert(kaydir);

                if (kaydir != 0) {
                    kaydir = kaydir - (a - b) / 2;
                }
            } else {
                // burası 992 den büyükten küçülme
                if (b > 992) {
                    // burası büyümüş de küçülmüş
                    // alert(kaydir);
                    if (kaydir != 0) {
                        // if(c > 992)
                        kaydir = kaydir + (b - a) / 2;
                        // burası sıfırdan ilk defa küçülecek
                    } else {
                        if (c > 992) {
                            kaydir = kaydir;
                        }else{
                            active_elementWidth = active_element.width();
                            active_elementSol = active_element.offset().left;
                            kaydir = (active_elementSol - a / 2) + active_elementWidth / 2;
                        }
                    }
                    // burası 992 den küçük kısımda küçülme
                } else {
                    // alert("sayfa sıkıntısız küçüldü");
                    // alert("şimdiki genişlik = " + a);
                    // alert("önceki genişlik = " + b);
                    // alert("b-a = " + (b - a));
                    kaydir = kaydir + (b - a) / 2;
                }
            }

            // alert(kaydir);
            $("#nav").animate({
                scrollLeft: kaydir
            }, 1000);
        }
    }

    // <!-- _____________________________ header position fixed _____________________________________________________________ -->

    var v_nav_top = $("header .vertical-navbar-area").offset().top;
    var v_a = window.innerWidth;
    console.log(a);
    $(window).scroll(function () {
        v_a = window.innerWidth;
        if ($(this).scrollTop() > 70) {
            if(v_a < 992){
                $("header .vertical-navbar-area").addClass("fixed-top header-shadow").css({
                    "top": "70px",
                });
                
                $(".content").css({
                    "margin-top" : "90px",
                });
                
                $("header .header-top").css("border-color", "transparent");
            }else{
                $("header .header-top").addClass("header-shadow").css("border-color", "transparent");
            }
            
            $("header").removeClass("header-shadow");
            $(".sidebar").addClass("sidebar-up");
            if (!$(".sidebar").hasClass("sidebar-left-in")) {
                $(".sidebar").removeClass("sidebar-down");
            }
        } else {
            $("header").addClass("header-shadow");
            $("header .vertical-navbar-area").removeClass("fixed-top header-shadow").css({
                "top": "140px",
            });
            $(".content").css({
                "margin-top": "50px",
            });
            $("header .header-top").css("border-bottom", "1px solid #e1e1e1");
            $("header .header-top").removeClass("header-shadow");
            if ($(".sidebar").hasClass("sidebar-up")) {
                $(".sidebar").removeClass("sidebar-up");
                $(".sidebar").addClass("sidebar-down");
                // $("header .fixed-top-shadow").removeClass("fixed-shadow");
            }
            else if ($(".sidebar").hasClass("sidebar-left-in")) {
                $(".sidebar").removeClass("sidebar-left-in");
            }
        }
    });

    // yukarda büyükse kaldırıyo ya ondan last child a eklesek daha iyi olur gibi
    if (v_a > 992) {
        if ($(window).scrollTop() > 70){
            $("header .header-top").addClass("header-shadow").css("border-color", "transparent");
        }else{
            $("header").addClass("header-shadow").css("border-color", "transparent");
        }
    }else{
        $("header .vertical-navbar-area").addClass("header-shadow");
    }

    if ($(window).scrollTop() > 70) {
        $(".sidebar").addClass("sidebar-left-in");
    } else {
        $(".sidebar").removeClass("sidebar-left-in");
    }





});
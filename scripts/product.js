$(function () {
    // $(window).resize(function () {
    //     var w = $(window).width();
    //     console.log(w);
    // });
    // w = $(window).width();
    // var w = $(window).width();
    // console.log(w);

    // _____________________________ checkbox Radio Button Specialist _____________________________________________________________
    $(':radio, :checkbox').each(function () {
        $(this).after('');
        if ($(this).is(':checked')) {
            $(this).parent().addClass('checked');
        }
    });

    $('label').on('click', function (e) {
        // radio
        if ($(':radio', this).length) {
            var name = $(':radio', this).attr('name');
            $('input[name=' + name + ']').parent().removeClass('checked');
            $(this).addClass('checked');
        }

        // checkbox
        if ($(':checkbox', this).length) {
            if ($(':checkbox', this).is(':checked')) {
                $(this).addClass('checked');
            } else {
                $(this).removeClass('checked');
            }
        }
    });

            // _____________________________ mobil menu _____________________________________________________________
    var menu_ac = $("#menu_ac");
    var menu_kapat = $("#menu_kapat");
    var m_section = $("#menu_section");
    var submenu_button = $("#submenu_button_container li");
    var menu_3 = $("#menu_3");
    // var a = 0, e = 0, l = 0;

    $('#menu_ac, .overlay').click(function () {
        // scrollbar şi karıştırdı
        w = window.innerWidth;
        if (w > 1200) {
            submenu_button.removeClass('active').find('ul').hide();
            m_section.hide(333);
            $('.overlay').removeClass('show');
            $('body').removeClass('overflow');

            if (menu_3.hasClass("fadeInDown_2")) {
                menu_3.addClass("fadeOutUp_2").removeClass("fadeInDown_2");
            } else {
                menu_3.addClass("fadeInDown_2").removeClass("fadeOutUp_2");
            }
            // menu_3.toggle(333);
        } else {
            // menu_3.hide(333);

            if ($(m_section).hasClass("animate__slideInLeft")) {
                $(m_section).addClass('animate__slideOutLeft').removeClass('animate__slideInLeft');
                $('.overlay').removeClass('show');
                $('body').removeClass('overflow');
            } else {
                $(m_section).show().addClass('animate__slideInLeft').removeClass('animate__slideOutLeft');
                $('.overlay').addClass('show');
                $('body').addClass('overflow');
            }

            menu_kapat.click(function () {
                $(m_section).addClass('animate__slideOutLeft').removeClass('animate__slideInLeft');
                $('.overlay').removeClass('show');
                $('body').removeClass('overflow');
            });

            submenu_button.removeClass('active').find('ul').hide();

        }
    });

    
        // _____________________________ mobil menunun submenusu _____________________________________________________________
    var blue_2 = "#1a73e8";
    submenu_button.click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find("ul").hide(333);
        } else {
            $(this).addClass('active');
            $(this).find("ul").show(333);
            $(this).siblings().removeClass('active').find("ul").hide(333);
        }
    });

    // _____________________________ menu 2 aç kapat _____________________________________________________________
    var menu_2_button = $("#menu_2_button");
    var menu_2 = $("#menu_2");
    var menu_2_kapat = $("#menu_2_kapat");
    menu_2_button.click(function () {
        // $(".overlay").addClass("show");
        menu_2.show().addClass("animate__slideInRight").removeClass("animate__slideOutRight");
    });
    menu_2_kapat.click(function () {
        menu_2.addClass("animate__slideOutRight").removeClass("animate__slideInRight");
        // $(".overlay").removeClass("show");
    });

    // _____________________________ HedefDışıTıklama _____________________________________________________________
    $('*').click(function (e) {
        menu_2_all = menu_2.find("*");
        menu_2_button_all = menu_2_button.find("*");
        if (!$(e.target).is(menu_2) && !$(e.target).is(menu_2_all) && !$(e.target).is(menu_2_button) && !$(e.target).is(menu_2_button_all)) {
            menu_2.addClass("animate__slideOutRight").removeClass("animate__slideInRight");
            // $(".overlay").removeClass("show");
        }
    });
    // navbar scrollbar's movement
    var navbar = $("#nav");
    $(window).resize(function () {
        var a = $(navbar).width();
        console.log(a);
        if (a < 900) {
            $("#NavRightButton").fadeIn(500);
        } else {
            $("#NavRightButton").fadeOut(500);
        }
    });
    var a = $(navbar).width();
    if (a < 900) {
        $("#NavRightButton").fadeIn(500);
    } else {
        // alert("b");
        $("#NavRightButton").fadeOut(500);
    }
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

    navbar.find(".nav-link").click(function () {
        $(this).addClass("active")
        $(this).parent().siblings().find(".nav-link").removeClass("active")
    });


});
$(function () {
    $(".mobile_tab").click(function () {
        // $('.mobile_nav, .container, .transparency').removeClass("active");
        $(".mobile_nav").addClass("active");
        $(".transparency").addClass("active");
        $(".container").addClass("active");
    });
    $(".transparency").click(function () {
        // $('.mobile_nav, .container, .transparency').removeClass("active");
        $(".mobile_nav").removeClass("active");
        $(".transparency").removeClass("active");
        $(".container").removeClass("active");
        $(".mobile_nav .sub").hide();
    })
    $(".mobile_nav > ul > li > a").click(function () {
        if ($(this).next('.sub').css('display') == 'none') {
            $(".mobile_nav .sub").slideUp(300);
            $(this).next('.sub').slideDown(300);
        } else {
            $(this).next('.sub').slideUp(300);
        }
        return false;
    })
    $(window).resize(function () {
        var w = $(this).width(); //화면의 가로 사이즈를 w에 대입

        if (w <= 850) {
        } else {
            if ($(".mobile_nav").hasClass("active") == true) {
                // $('.mobile_nav, .container, .transparency').removeClass("active");
                $(".mobile_nav").removeClass("active");
                $(".transparency").removeClass("active");
                $(".container").removeClass("active");
                $(".mobile_nav .sub").hide();
            }
        }
    });
    $('.nav ul').hover(function(){
        $('.nav > ul').addClass('over');
    },function(){
        $(this).removeClass('over');
    });
});
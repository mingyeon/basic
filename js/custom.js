$(function () {
    $('.main_visual_slide').slick({
        autoplay: true,
        arrows: false,
        useTransform: false
    })

    $('.main_visual .arrows .prev').on('click', function () {
        $('.main_visual_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .next').on('click', function () {
        $('.main_visual_slide').slick('slickNext')
    });

    $('.main_customer .news .news_menu button').on('click', function () {
        let idx = $(this).parent().index();//0,1
        $('.main_customer .news .news_content>ul').eq(idx).addClass('on').siblings().removeClass('on')
    })

    $('.to_top button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 600)
    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct);

        if (sct > 800) {
            $('.to_top').addClass('on')
        } else (
            $('.to_top').removeClass('on')
        )
    })
});
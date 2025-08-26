$(document).ready(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
        $('nav').toggleClass('active')
    })
})

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("header").addClass("white")
    } else {
        $("header").removeClass("white");
    }
})

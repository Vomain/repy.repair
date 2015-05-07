$(window).scroll(function () {
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var separateTop = $("#portfolio").offset().top;

    if (windowPos + 200 > separateTop && $("audio").attr("src") != "sound/repair_remix.wav") {
        $("audio").attr("src", "sound/repair_remix.wav");
    }

    if (windowPos + 200 < separateTop && $("audio").attr("src") != "sound/repair.mp3") {
        $("audio").attr("src", "sound/repair.mp3");
    }


});

/*$(".portfolio-link").click(function () {

if ($(".portfolio-modal").attr("style") == "dislay: block;") {
    $.each($('audio'), function () {
        $(this).stop();
    });
}
});*/

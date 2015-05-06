$(window).scroll(function () {
    var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
    var windowHeight = $(window).height(); // get the height of the window
    var docHeight = $(document).height();
    var separateTop = $("#portfolio").offset().top;
    console.log(separateTop);
    console.log(windowPos);

    if (windowPos + 200 > separateTop && $("audio").attr("src") != "sound/repair_carriere.mp3") {
        $("audio").attr("src", "sound/repair_carriere.mp3");
    }

    if (windowPos + 200 < separateTop && $("audio").attr("src") != "sound/repair.mp3") {
        console.log("Coucou");
        $("audio").attr("src", "sound/repair.mp3")
    }
});

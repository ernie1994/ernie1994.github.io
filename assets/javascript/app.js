$(document).ready(function () {

    $("#stars").height($("#stars").height() * 1.60);

    $("a").attr("target", "_blank");

    $("#myWork").on("click", function () {
        $(document).scrollTop($("#portfolio").offset().top - 20);
    });

    var height = $(".card-img-top").height();

    $(".card-img-top").height(height);

});
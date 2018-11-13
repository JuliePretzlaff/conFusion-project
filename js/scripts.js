$("#carousel-button").click(function () {
    if ($("#carousel-button").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carousel-button").children("span").removeClass('fa-pause');
        $("#carousel-button").children("span").addClass('fa-play');
    }
    else if ($("#carousel-button").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carousel-button").children("span").removeClass('fa-play');
        $("#carousel-button").children("span").addClass('fa-pause');
    }
});

$("#loginModalLink").click(function () {
    $("#loginModal").modal();
})

$("#dismissLoginModal").click(function () {
    $("#loginModal").modal('hide');
})


$("#resoModalLink").click(function () {
    $("#resoModal").modal();
})

$("#dismissResoModal").click(function () {
    $("#resoModal").modal('hide');
})

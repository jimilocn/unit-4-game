$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

var targetScore = Math.floor(Math.random() * 101) + 19;

$("#targetScore").html("<h3>" + targetScore + "</h3>");

var yourScore = 0;

var hits = 0;

var flops = 0;

var numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];


var imageArray = ["assets/images/Jisoo.jpg", "assets/images/Jennie.jpg", "assets/images/Lisa.jpg", "assets/images/Rose.jpg"];


for (var i = 0; i < numberOptions.length; i++) {
    var imageDiva = $("<img class='divaPicture' src='" + imageArray[i] + "' data-divaValue='" + numberOptions[i] + "' />");


    $("#divaPic").append(imageDiva);

}

$("#hits").html("<h3>Hits: " + hits + "</h3>");
$("#flops").html("<h3>Flops: " + flops + "</h3>");

$(".divaPicture").on("click", function () {

    var divaValue = ($(this).attr("data-divaValue"));

    divaValue = parseInt(divaValue);
    
    console.log(divaValue);

    yourScore += divaValue;

    $("#yourScore").html("<h3>" + yourScore + "</h3>");


    if (yourScore === targetScore) {
        hits++;
        var hitsDiv = $("#hits");
        hitsDiv.html("<h3>" + hits + "</h3>");
    }

    else if (yourScore >= targetScore) {
        flops++;
        var flopsDiv = $("#flops");
        flopsDiv.html("<h3>" + flops + "</h3>");
    }

});
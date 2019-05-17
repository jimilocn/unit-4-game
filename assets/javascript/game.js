$(document).ready(function () {
    $('[data-toggle="popover"]').popover();

    //declare the global variables

    var targetScore = 0;

    var yourScore = 0;

    var hits = 0;

    var flops = 0;

    var imageArray = ["assets/images/Jisoo.jpg", "assets/images/Jennie.jpg", "assets/images/Lisa.jpg", "assets/images/Rose.jpg"];
    $("#hits").html("<h3>Hits: " + hits + "</h3>");
    $("#flops").html("<h3>Flops: " + flops + "</h3>");
    //

    function reset() {
        //// reset the value  whatever you need to restart  (the targetScore, yourScore, show new values the HTML  )
        targetScore = 0;
        yourScore = 0;
        $("#yourScore").html("<h3>" + yourScore + "</h3>");
        $("#divaPic").empty();
        calculateTarget();
        renderImages();

    };


    // PLACE TO CALCULTE THE TARGETscroe

    function calculateTarget() {
        targetScore = Math.floor(Math.random() * 101) + 19;
        // show this on the screen
        $("#targetScore").html("<h3>" + targetScore + "</h3>");

    }




    function renderImages() {
        var numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];


        for (var i = 0; i < numberOptions.length; i++) {
            var imageDiva = $("<img class='divaPicture' src='" + imageArray[i] + "'/>");

            imageDiva.attr("data-divaValue", numberOptions[i]);


            $("#divaPic").append(imageDiva);

        }




        $(".divaPicture").on("click", function () {

            var divaValue = ($(this).attr("data-divaValue"));

            divaValue = parseInt(divaValue);

            console.log("divaValue: ", divaValue);

            yourScore += divaValue;

            $("#yourScore").html("<h3>" + yourScore + "</h3>");


            if (yourScore === targetScore) {
                hits++;
                var hitsDiv = $("#hits");
                hitsDiv.html("<h3>Hits: " + hits + "</h3>");
                reset();
            }

            else if (yourScore >= targetScore) {
                flops++;
                var flopsDiv = $("#flops");
                flopsDiv.html("<h3>Flops:" + flops + "</h3>");
                reset();
            }


        });
    }
    $(".reset").on("click", function () {
        reset();
    });
    reset();
});
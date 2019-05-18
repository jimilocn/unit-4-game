$(document).ready(function () {
    $('[data-toggle="popover"]').popover();

    //declare the global variables

    var targetScore = 0;

    var yourScore = 0;

    var hits = 0;

    var flops = 0;

    var imageArray = ["assets/images/Jisoo.jpg", "assets/images/Jennie.jpg", "assets/images/Lisa.jpg", "assets/images/Rose.jpg"];
    $("#hits").html("Billboard #1 Hits: " + hits);
    $("#flops").html("Terrible Flops: " + flops);
    //

    function reset() {
        //// reset the value  whatever you need to restart  (the targetScore, yourScore, show new values the HTML  )
        targetScore = 0;
        yourScore = 0;
        $("#yourScore").html("<h3>" + yourScore + "</h3>");
        $("#divaPic").empty();
        calculateTarget();
        renderImages();
        $(".alertalert").html("<div class='alert alert-danger alert-dismissible text-center collapse'></div>");


    };

    function resetAll() {
        //// reset the value  whatever you need to restart  (the targetScore, yourScore, show new values the HTML  )
        targetScore = 0;
        yourScore = 0;
        hits = 0;
        flops = 0;
        $("#yourScore").html("<h3>" + yourScore + "</h3>");
        $("#divaPic").empty();
        $("#hits").html("Billboard #1 Hits: " + hits);
        $("#flops").html("Terrible Flops: " + flops);
        $("#alert").empty();
        calculateTarget();
        renderImages();
        $(".alertalert").html("<div class='alert alert-danger alert-dismissible text-center collapse'></div>");

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
                $("#divaPic").html("<div class='alert alert-danger alert-dismissible text-center collapse'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>HOT! HOT! HOT!</strong> IT IS A HUGE HIT! Let's make another one!</div>");
                $(".alert").show();
                hits++;
                var hitsDiv = $("#hits");
                hitsDiv.html("Billboard #1 Hits: " + hits);
                $(".divaPicture").on("click", function () {
                    reset();
                });
                var audioWinElement = document.createElement("audio");
                audioWinElement.setAttribute("src", "assets/sounds/black pink in your area cut 2.mp3");
                audioWinElement.play();
                $(".alert").on("click", function () {
                    reset();
                });


            }

            else if (yourScore >= targetScore) {
                $("#divaPic").html("<div class='alert alert-danger alert-dismissible text-center collapse'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>BOO! OH NO!</strong> Everyone thought the girls were annoying... Let's try again!</div>");
                $(".alert").show();
                flops++;
                var flopsDiv = $("#flops");
                flopsDiv.html("Terrible Flops: " + flops);
                $(".divaPicture").on("click", function () {
                    reset();
                });
                var audioLossElement = document.createElement("audio");
                audioLossElement.setAttribute("src", "assets/sounds/boo.mp3");
                audioLossElement.play();
                $(".alert").on("click", function () {
                    reset();
                });


            }


        });
    }
    $(".reset").on("click", function () {
        resetAll();
    });


    reset();
});
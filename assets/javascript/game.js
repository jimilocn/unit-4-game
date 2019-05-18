$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        title: 'The name of the game is balance!',
    });


    //global variables
    var targetScore = 0;
    var yourScore = 0;
    var hits = 0;
    var flops = 0;
    var blackPink =  $("#blackPink");
    var scoreBoard = $("#scoreBoard");
    



    // Array of images
    var imageArray = ["assets/images/Jisoo.jpg", "assets/images/Jennie.jpg", "assets/images/Lisa.jpg", "assets/images/Rose.jpg"];



    function displayBillboard() {
        $("#hits").html("Billboard #1 Hits: " + hits);
        $("#flops").html("Terrible Flops: " + flops);
    };

    function pictureClickReset() {
        $(".divaPicture").on("click", function () {
            reset();
        });
    };

    function alertClickReset() {
        $(".alert").on("click", function () {
            reset();
        });
    };

    function displayYourScore() {
        $("#yourScore").html("<h3>" + yourScore + "</h3>");
    };

    function createAlert() {
        $(".alertalert").html("<div class='alert alert-danger alert-dismissible text-center collapse'></div>");
    };

    function resetLogo () {
        blackPink.html("<img class='header' src='./assets/images/blackpink logo.png' alt='Black Pink'>");
    }


    function clearScoreBoard () {
        $("#targetDivaScore").html("");
        $("#yourDivaScore").html("");
        $("#theDivas").html("");
        $("#yourScore").html("");
        $("#targetScore").html("");
    }

    function resetScoreBoard () {
        $("#targetDivaScore").html("Target Diva Score");
        $("#yourDivaScore").html("Your Diva Score");
        $("#theDivas").html("~ T h e D i v a s ~ ");
    }

    function reset() {
        //// reset the value  whatever you need to restart  (the targetScore, yourScore, show new values the HTML  )
        targetScore = 0;
        yourScore = 0;
        $("#divaPic").empty();
        calculateTarget();
        renderImages();
        createAlert();
        resetScoreBoard();
        displayYourScore();
        displayBillboard();
        resetLogo ();

     

    };

    function resetAll() {
        //// reset the value  whatever you need to restart  (the targetScore, yourScore, show new values the HTML  )
        targetScore = 0;
        yourScore = 0;
        hits = 0;
        flops = 0;
        $("#divaPic").empty();
        $("#alert").empty();
        resetScoreBoard();
        displayYourScore();
        displayBillboard();
        calculateTarget();
        renderImages();
        createAlert();
        resetLogo ();
      
    };




    // PLACE TO CALCULTE THE TARGETscroe

    function calculateTarget() {
        targetScore = Math.floor(Math.random() * 101) + 19;
        // show this on the screen
        $("#targetScore").html("<h3>" + targetScore + "</h3>");

    };



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

            displayYourScore();


            if (yourScore === targetScore) {
                $("#divaPic").html("<div class='alert alert-danger alert-dismissible text-center collapse'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>HOT! HOT! HOT!</strong> IT IS A HUGE HIT! Let's make another one!</div>");

                $(".alert").show();

                blackPink.html("<img class='gif' src='assets/images/Black Pink Love.gif' alt='Black Pink'></img>")

                clearScoreBoard ();

                hits++;

                var hitsDiv = $("#hits");

                hitsDiv.html("Billboard #1 Hits: " + hits);

                pictureClickReset();

                var audioWinElement = document.createElement("audio");

                audioWinElement.setAttribute("src", "assets/sounds/black pink in your area cut 2.mp3");

                audioWinElement.play();

                alertClickReset();


            }

            else if (yourScore >= targetScore) {
                $("#divaPic").html("<div class='alert alert-danger alert-dismissible text-center collapse'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>BOO! OH NO!</strong> Everyone thought the girls were annoying... Let's try again!</div>");

                $(".alert").show();

                blackPink.html("<img class='gif' src='assets/images/black pink sad.gif' alt='Black Pink'></img>")

                clearScoreBoard ();

                flops++;

                var flopsDiv = $("#flops");

                flopsDiv.html("Terrible Flops: " + flops);

                pictureClickReset();

                var audioLossElement = document.createElement("audio");

                audioLossElement.setAttribute("src", "assets/sounds/boo.mp3");

                audioLossElement.play();

                alertClickReset();
            }
        });
    };


    $(".reset").on("click", function () {
        resetAll();
    });


    reset();
});
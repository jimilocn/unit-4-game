$(document).ready(function () {
    $('[data-toggle="popover"]').popover({
        title: 'The name of the game is balance!',
    });


    //global variables
    var targetScore = 0;
    var yourScore = 0;
    var hits = 0;
    var flops = 0;
    var blackPink = $("#blackPink");
    var divaPic = $("#divaPic");
    var hitsDiv = $("#hits");
    var flopsDiv = $("#flops");
    var yourScoreDiv = $("#yourScore");
    // Array of images
    var imageArray = ["assets/images/Jisoo.jpg", "assets/images/Jennie.jpg", "assets/images/Lisa.jpg", "assets/images/Rose.jpg"];


// used to display the number of hits and flops that have been acquired throughout the game
    function displayBillboard() {
        hitsDiv.html("Billboard Hits: " + hits);
        flopsDiv.html("Terrible Flops: " + flops);
    };
// this is used to 
    function alertClickReset() {
        $(".alert").on("click", function () {
            reset();
        });
    };

    function displayYourScore() {
        yourScoreDiv.html("<h3>" + yourScore + "</h3>");
    };

    function resetLogo() {
        blackPink.html("<img class='header' src='./assets/images/blackpink logo.png' alt='Black Pink'>");
    };

    function clearScoreBoard() {
        $("#targetDivaScore").html("");
        $("#yourDivaScore").html("");
        $("#theDivas").html("");
        $("#yourScore").html("");
        $("#targetScore").html("");
    };

    function resetScoreBoard() {
        $("#targetDivaScore").html("Target Diva Score");
        $("#yourDivaScore").html("Your Diva Score");
        $("#theDivas").html("~ T h e D i v a s ~ ");
    };

    function calculateTarget() {
        targetScore = Math.floor(Math.random() * 101) + 19;
        // show this on the screen
        $("#targetScore").html("<h3>" + targetScore + "</h3>");

    };

    function reset() {
        //// reset the value  whatever you need to restart  (the targetScore, yourScore, show new values the HTML  )
        targetScore = 0;
        yourScore = 0;
        divaPic.empty();
        calculateTarget();
        renderImages();
        resetScoreBoard();
        displayYourScore();
        displayBillboard();
        resetLogo();

    };

    function resetAll() {
        //// reset the value  whatever you need to restart  (the targetScore, yourScore, show new values the HTML  )
        targetScore = 0;
        yourScore = 0;
        hits = 0;
        flops = 0;
        divaPic.empty();
        resetScoreBoard();
        displayYourScore();
        displayBillboard();
        calculateTarget();
        renderImages();
        resetLogo();

    };

    function playAudioWin() {
        var audioWinElement = document.createElement("audio");

        audioWinElement.setAttribute("src", "assets/sounds/black pink in your area cut 3.mp3");

        audioWinElement.play();
    };

    function playAudioLoss() {
        var audioLossElement = document.createElement("audio");

        audioLossElement.setAttribute("src", "assets/sounds/boo2.mp3");

        audioLossElement.play();
    };

    function alertWin() {
        $("#divaPic").html("<div class='alert alert-danger alert-dismissible text-center collapse'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>HOT! HOT! HOT!</strong> You reached the Billboard's #1 Spot! Let's do that again! Click to here restart!</div>");

        $(".alert").show();

        blackPink.html("<img class='gif' src='assets/images/Black Pink Love.gif' alt='Black Pink'></img>");
    };

    function alertLoss() {
        $("#divaPic").html("<div class='alert alert-danger alert-dismissible text-center collapse'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>BOO! OH NO!</strong> Everyone thought the girls were annoying... Let's try again! Click to here restart!</div>");

        $(".alert").show();

        blackPink.html("<img class='gif' src='assets/images/black pink sad.gif' alt='Black Pink'></img>")
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

                playAudioWin();

                alertWin();

                clearScoreBoard();

                hits++;

                var hitsDiv = $("#hits");

                hitsDiv.html("Billboard Hits: " + hits);

                alertClickReset();


            }

            else if (yourScore >= targetScore) {
                playAudioLoss();

                alertLoss();

                clearScoreBoard();

                flops++;

                var flopsDiv = $("#flops");

                flopsDiv.html("Terrible Flops: " + flops);

                alertClickReset();
            }
        });
    };


    $(".reset").on("click", function () {
        resetAll();
    });


    reset();
});
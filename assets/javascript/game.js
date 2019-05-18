// allows the html to load first before running any functions
$(document).ready(function () {
    // allows for the popover button in the top left to function. this is taken from bootstrap website
    $('[data-toggle="popover"]').popover({
        // title within the popover
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

    // used to display the number of hits and flops that have been acquired throughout the game
    function displayBillboard() {
        hitsDiv.html("Billboard Hits: " + hits);
        flopsDiv.html("Terrible Flops: " + flops);
    };

    // this is used to create an onclick to reset the game when the user presses the alert message that pops up after win or loss 
    function alertClickReset() {
        $(".alert").on("click", function () {
            reset();
        });
    };

    // this code displays the user score after clicking each Diva's picture
    function displayYourScore() {
        yourScoreDiv.html("<h3>" + yourScore + "</h3>");
    };

    // This function will restore the logo of the game back to it's initial place to replace the gif after winning or lossing
    function resetLogo() {
        blackPink.html("<img class='header' src='./assets/images/blackpink logo.png' alt='Black Pink'>");
    };

    // this will delete the information within the scoreboard to make room for the gif after winning or lossing
    function clearScoreBoard() {
        $("#targetDivaScore").html("");
        $("#yourDivaScore").html("");
        $("#theDivas").html("");
        $("#yourScore").html("");
        $("#targetScore").html("");
    };

    // this will place the text back into the scoreboard after the game is reset
    function resetScoreBoard() {
        $("#targetDivaScore").html("Target Diva Score");
        $("#yourDivaScore").html("Your Diva Score");
        $("#theDivas").html("~ T h e D i v a s ~ ");
    };

    // this will generate a random number for the user to try to match at the beginning of the game
    function calculateTarget() {
        targetScore = Math.floor(Math.random() * 101) + 19;
        // show this on the screen
        $("#targetScore").html("<h3>" + targetScore + "</h3>");

    };

    // this will reset the game, but keep the number of hits and flops so that the user can continue to play
    function reset() {
        targetScore = 0;
        yourScore = 0;
        // important because it will empty the div containing the Diva images. this way the images don't continue to append on top of each other and creating many many pictures
        divaPic.empty();
        calculateTarget();
        game();
        resetScoreBoard();
        displayYourScore();
        displayBillboard();
        resetLogo();
    };

    // this is for the button at the top of the screen that will reset everything including the number of hits and flops
    function resetAll() {
        targetScore = 0;
        yourScore = 0;
        hits = 0;
        flops = 0;
        divaPic.empty();
        resetScoreBoard();
        displayYourScore();
        displayBillboard();
        calculateTarget();
        game();
        resetLogo();
    };

    // function to play blackpink's audio "black pink in your area" when the user wins the game
    function playAudioWin() {
        // creates an audio element
        var audioWinElement = document.createElement("audio");
        // attaches the sources for the newly created audio element. audio was taken from youtube clip https://youtu.be/2S24-y0Ij3Y
        audioWinElement.setAttribute("src", "assets/sounds/black pink in your area cut 3.mp3");
        // plays the new audio
        audioWinElement.play();
    };

    // this function will play the crowd booing audio when the user losses the game
    function playAudioLoss() {
        // creates an audio element
        var audioLossElement = document.createElement("audio");
        // attaches the sources for the newly created audio element. audio was taken from http://soundbible.com/tags-crowd-booing.html
        audioLossElement.setAttribute("src", "assets/sounds/boo2.mp3");
        // plays the new audio
        audioLossElement.play();
    };

    // this is create the alert that the user has won the game and created a hit!
    function alertWin() {
        // creates an alert using bootstrap format with winning message
        $("#divaPic").html("<div class='alert alert-danger alert-dismissible text-center collapse'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>HOT! HOT! HOT!</strong> You reached the Billboard's #1 Spot! Let's do that again! Click to here restart!</div>");
        // shows the alert from it's collapsed state
        $(".alert").show();
        // insert a gif into the div where the game logo is. picture is taken from google images
        blackPink.html("<img class='gif' src='assets/images/Black Pink Love.gif' alt='Black Pink'></img>");
    };

    // this will create the alert that the user has lost the game and everyone in the music community thinks blackpink is annoying
    function alertLoss() {
        // creates an alert using bootstrap format with lossing message
        $("#divaPic").html("<div class='alert alert-danger alert-dismissible text-center collapse'><a href='#' class='close' data-dismiss='alert' aria-label='close'>&times;</a><strong>BOO! OH NO!</strong> Everyone thought the girls were annoying... Let's try again! Click to here restart!</div>");
        // shows the alert from it's collapsed state
        $(".alert").show();
        // insert a gif into the div where the game logo is. picture is taken from google images
        blackPink.html("<img class='gif' src='assets/images/black pink sad.gif' alt='Black Pink'></img>")
    };

    // has all the functionality of the game
    function game() {

        // Array of images
        var imageArray = ["assets/images/Jisoo.jpg", "assets/images/Jennie.jpg", "assets/images/Lisa.jpg", "assets/images/Rose.jpg"];

        // will create an array full of random numbers between 1-12
        var numberOptions = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];

        // will generate 4 images with the random values with the images listed above
        for (var i = 0; i < numberOptions.length; i++) {
            // create a dynamic image with the images from the array defined above
            var imageDiva = $("<img class='divaPicture' src='" + imageArray[i] + "'/>");
            // give each image a value from the random number array
            imageDiva.attr("data-divaValue", numberOptions[i]);

            // post the images with their values into the html
            $("#divaPic").append(imageDiva);
        }

        // on click function for the new images created
        $(".divaPicture").on("click", function () {

            // setting a variable for the new values in each images
            var divaValue = ($(this).attr("data-divaValue"));
            // pulling the numeric meaning from the string that was created to compute the values together
            divaValue = parseInt(divaValue);
            // adding your ucrrent score with the value pulled from each image
            yourScore += divaValue;
            // calling forth the function to push your new score onto the html
            displayYourScore();

            // if your score matches the randomly generated score...
            if (yourScore === targetScore) {
                // play "black pink in your area"
                playAudioWin();
                // display alert that you won and new gif image in place of logo
                alertWin();
                // clear the scores so that there is more room for the gif to pop up
                clearScoreBoard();
                // number of hits in the bottom counter increases by 1
                hits++;
                // creating a variable for the section in the HTML for the new information to be displayed
                var hitsDiv = $("#hits");
                // displaying the new number of wins
                hitsDiv.html("Billboard Hits: " + hits);
                // this allows the game to be reset when the user clicks on the alert
                alertClickReset();
            }

            // if your score goes over the score generated by the computer
            else if (yourScore >= targetScore) {

                // play the crowd boos
                playAudioLoss();
                // generate the alert and gif for the screen
                alertLoss();
                // clear the scores so that there is more room for the gif to pop up
                clearScoreBoard();
                // number of flops increases by 1
                flops++;
                // creating a variable for the section in the HTML for the new information to be displayed
                var flopsDiv = $("#flops");
                // displays the new number of losses
                flopsDiv.html("Terrible Flops: " + flops);
                // this allows the game to be reset when the user clicks on the alert
                alertClickReset();
            }
        });
    };

    // on click event for is the user chooses to reset the entire game with the button at the top right
    $(".reset").on("click", function () {
        // clears everything, including hits and flops
        resetAll();
    });

    // this is initiate the game with all functionalities
    reset();
});

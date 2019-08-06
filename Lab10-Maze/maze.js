var win = true;

$(document).ready(function(){
    $("#start").click(
        function()
        {
            $("#status").text("Good Luck.");
            $("div .boundary").removeClass("youlose");
            startGame();

        });
});

function startGame()
{
    win = true;

    $(".boundary").hover(
        function()
        {
            loose();
        });

    $("#end").click(
        function()
        {
            if(win)
            {
                $("#status").text("You WIN! : Click S to Play Again");
                endGame();
            }
        });

    $("#maze").mouseleave(
        function()
        {
            loose();
        });

}

function loose(){
    win=false;
    $("div .boundary").addClass("youlose");
    $("#status").text("You LOSE! : Click 'S' to Retry ");
}

function endGame(){
    $("div .boundary").removeClass("youlose");
    $('.boundary').unbind('hover');
    $("#maze").unbind('mouseleave');
}


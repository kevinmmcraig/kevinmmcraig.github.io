
//declarations of them global variables
var windowWidth, width_temp, windowHeight, height_temp;


//function that runs when page is finished loading
$(document).ready(function(){

    //have the content slide up and down
    $("#toggleContent1").click(function() {
        $("#content1").slideToggle(speed="slow");
    });
    $("#toggleContent2").click(function() {
        $("#content2").slideToggle(speed="slow");
    });
    $("#toggleContent3").click(function() {
        $("#content3").slideToggle(speed="slow");
    });
    $("#toggleContent4").click(function() {
        $("#content4").slideToggle(speed="slow");
    });
    $("#toggleContent5").click(function() {
        $("#content5").slideToggle(speed="slow");
    });

    //get dimensions of window viewport
    windowWidth = $(window).width();
    windowHeight = $(window).height();

    set_first_bullet(windowWidth);
    check_if_window_resized();

})

//sets the first bullet in the technical skills section
function set_first_bullet(width)
{
    var width;
    var text = document.getElementById("first_bullet_point");
    var alt_text = document.getElementById("first_bullet_point_alt");

    if (width < 768) {
        text.style.display = "none";
        alt_text.style.display = "block";
    } else {
        text.style.display = "block";
        alt_text.style.display = "none";
    }
}


//checks if window size was changed
function check_if_window_resized()
{
    width_temp = $(window).width();
    height_temp = $(window).height();

    if (width_temp != windowWidth || height_temp != windowHeight) {
        set_first_bullet(width_temp);
    }

    setTimeout(function(){check_if_window_resized()},100);
}






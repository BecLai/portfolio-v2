var activeSection;

$("#intro-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 500);
});

$("#persona-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#persona").offset().top
    }, 500);
    activeSection = document.getElementById("persona"); 
    console.log(activeSection);
});

$("#testing-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#testing").offset().top
    }, 500);
});

$("#findings-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#findings").offset().top
    }, 500);
});

$("#solution-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#solution").offset().top
    }, 500);
});

$("#summary-btn").click(function() {
    $('html, body').animate({
        scrollTop: $("#summary").offset().top
    }, 500);
});
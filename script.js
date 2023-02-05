// -------------------------------nav-----------------------------
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
// -------------------------------nav-----------------------------
// --------------------------------------------------up btn --------------------------------------------------------
$(window).scroll(function () {
    $('a').toggleClass('scrollh', $(this).scrollTop() > 50);
});

$(".demoupbtn").click(function(){
    $("body,html").animate({scrollTop:'0'},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------
$("a[href^='#']").click(function(e) {
    let ax = $(e.target).attr("href");
    let ay = $(ax).offset().top;
    $("body,html").animate({scrollTop:ay},1000)
})

// --------------------------------------------------up btn --------------------------------------------------------
$(document).ready(function(){
    $("#store-container").fadeOut(2000,function(){
        $("#loading").fadeOut(2000,function(){
          
            $("#loading").remove()
        })
    })
})


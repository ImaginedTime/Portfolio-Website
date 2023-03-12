$(document).ready(function () {
    $(".hamburger").click(function () {
        $(".nav-links").slideToggle();
        $(".line").toggleClass("active");
    });
});

// back-to-top button appears when the page is scrolled 
$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 300)
        $(".back-to-top").fadeIn();
    else
        $(".back-to-top").fadeOut();
});


// // to check whether the media query detects properly
// setInterval(check, 50);
// function check(){
//     const mediaQuery = window.matchMedia('( max-width: 768px )')
//     // Note the `matches` property
//     if ( mediaQuery.matches ) {
//     console.log('Media Query Matched!')
//     }
// }
/* changing background color of navigation bar when scrolled */
$(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
        $(".navbar-header").addClass("godown");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".navbar-header").removeClass("godown");
    }
});
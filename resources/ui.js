var mn = $("#header");
var mns = "scrolled";
var hdr = $("#header").outerHeight(false);

$(window).scroll(function() {
    if( $(this).scrollTop()> hdr ) {
        mn.addClass(mns);
    } else {
        mn.removeClass(mns);
    }
});

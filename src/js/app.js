/* sweetScroll load */
document.addEventListener("DOMContentLoaded", function () {
  sweetScroll = new SweetScroll({/* some options */});
}, false);

$(".readmore-link").click(function clicked(e) {
    // record if our text is expanded
    var isExpanded = $(e.target).hasClass("expand");
    
    //close all open paragraphs
    $(".readmore.expand").removeClass("expand");
    $(".readmore-link.expand").children("i").addClass("fa-chevron-down");
    $(".readmore-link.expand").children("i").removeClass("fa-chevron-up");
    $(".readmore-link.expand").removeClass("expand");
    
    // if target wasn't expand, then expand it
    if (!isExpanded) {
        $( e.target ).parent( ".readmore" ).addClass( "expand" );
        $(e.target).addClass("expand"); 
        
        $(e.target).children("i").addClass("fa-chevron-up");
        $(e.target).children("i").removeClass("fa-chevron-down");
    } 
});

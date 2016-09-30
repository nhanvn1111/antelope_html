// Hello.
//
// This is The Scripts used for Antelope Minimal Blog Theme
//
//

function main() {

(function () {
   'use strict';

    // Header Slider Disable Auto Slide
    //==========================================
    /* Header Slider Layout #1 */
    $('#header-slider.carousel.layout-one').carousel({
        interval: 3000
    });
    /* Header Slider Layout #2 */
    $('#header-slider.carousel.layout-two').carousel({
        interval: false
    });
    
 	  // Slider Toggle
    //==========================================
    $('.thumb-block').on("click",function() {
        $('.thumb-block.active').removeClass('active');
        $(this).addClass('active');
    });

}());


}
main();
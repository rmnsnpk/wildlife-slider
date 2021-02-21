$(document).ready(function(){
    $('.articles_slider').slick({
        
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right.png"></img></button>'
});
});
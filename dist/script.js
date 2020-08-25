
$( document ).ready(function() {
    function slideNumber(){
        var currentIndex = $('#carouselExampleIndicators .carousel-item.active').index(currentIndex) + 2 ;
        console.log(currentIndex);
        if(currentIndex == 4){
            currentIndex=1;
        }
        $('.carousel-counter').html(currentIndex + '/3');
    }

$('#carouselExampleIndicators').on('slide.bs.carousel', function () {
slideNumber();
})
$(".next").click(function(){
    slideNumber();
});

$(".prev").click(function(){
    slideNumber();
});

$(".carousel-indicators li").click(function(){
    slideNumber();
});
});
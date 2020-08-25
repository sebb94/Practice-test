$('#carouselExampleIndicators').on('slide.bs.carousel', function () {

    var totalItems = $('.carousel-item').length;
    var currentIndex = $('div.carousel-item.active').index()+2;
    if( currentIndex == 4){
        currentIndex = 1;
    }
    $('.carousel-counter').html(''+currentIndex+'/'+totalItems+'');

})
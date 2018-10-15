$(function(){
    console.log('Test');


    if ($(window).width() < 960) {
        alert('Turn your phone sideways for the best experience');
        $('.slidertext').slick({
            dots: false,
        });
    }
    else {
        alert('More than 960');
    }



$('#people').click(function(){
    $(this).css('filter', 'none');
})




    i++;
    console.log(i);

    var i = 0;
$('.slick-next').click(function(){
    console.log('next clicked');
    i++;
    console.log(i);
    if (i==1) {
        $('#people').css('filter', 'none');
    }
})






    $('.slidertext').slick({
        dots: true,
    });



    //close ready function
    });


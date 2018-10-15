//Slider Page JS
$(function () {
    console.log('Test');

    //function to alert mobile uders to rotate phone
    if ($(window).width() < 960) {
        alert('Turn your phone sideways for the best experience');
        $('.slidertext').slick({
            dots: false,
        });
    }
    else {
        $('.slidertext').slick({
            dots: true,
        });
    }


    //function to turn each svg element into color as user clicks next and back buttons
    var i = 0;
    console.log(i);
    $('body').on('click', '.slick-next', () => {
        console.log('next clicked');
        i++;
        console.log(i);
        if (i == 1) {
            $('#roads').css('filter', 'none');
        } else if (i==2){
            $('#energy').css('filter', 'drop-shadow(16px 16px 20px yellow)');
        }else if (i==3) {
            $('#waste').css('filter', 'none');
        }else if (i==4) {
            $('#trees').css('filter', 'none');
        }else if (i==5) {
            $('#transit').css('filter', 'drop-shadow(16px 16px 20px yellow)');
        }else if (i==6) {
            $('#lighting').css('filter', 'none');
        }else if (i==7) {
            $('#seating').css('filter', 'none');
        }else if (i==8) {
            $('#building').css('filter', 'none');
        }else if (i==9) {
            $('#grass').css('filter', 'none');
        }else if (i==10) {
            $('#people').css('filter', 'none');
        }else  {
            i==0;
        }

    });

    $('body').on('click', '.slick-prev', () => {
        console.log('back clicked');
        i--;
        console.log(i);
        if (i == 0) {
            $('#roads').css('filter', 'grayscale(100%)');
        } else if (i==1){
            $('#energy').css('filter', 'grayscale(100%)');
        }else if (i==2) {
            $('#waste').css('filter', 'grayscale(100%)');
        }else if (i==3) {
            $('#trees').css('filter', 'grayscale(100%)');
        }else if (i==4) {
            $('#transit').css('filter', 'grayscale(100%)');
        }else if (i==5) {
            $('#lighting').css('filter', 'grayscale(100%)');
        }else if (i==6) {
            $('#seating').css('filter', 'grayscale(100%)');
        }else if (i==7) {
            $('#building').css('filter', 'grayscale(100%)');
        }else if (i==8) {
            $('#grass').css('filter', 'grayscale(100%)');
        }else if (i==9) {
            $('#people').css('filter', 'grayscale(100%)');
        }else  {
            i==0;
        }

    });
    


    //close ready function
});


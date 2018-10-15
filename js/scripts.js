
$(function(){
    console.log('DOM Loaded');


    var url = "http://www.example.com/EIFS-items/search.php?l2=3,15,25";





    $.backstretch('img/citymap.jpg');

    new TypeIt('.type-it', {
        strings: ['By the year 2050, the world population is expected to reach 9.7 billion people.','Over two-thirds of them are projected to live in urban areas.',' This means that the future of the world lies in the city.','The greener we make our cities, the greener our world will be.', 'But what does it take to create a city that nurtures both humanity and nature?', 'Click anywhere to find out.'],
        speed: 50,
        breakLines: false,
        autoStart: false
    });









    $('.slidertext').slick({
        dots:true,

    });





//Close Document Ready Function
});
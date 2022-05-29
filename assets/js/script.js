// header section start
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 132) {
        $(".bei-header").addClass("sticky");
        $("body").addClass("sticky-soomth");
    } else {
        $(".bei-header").removeClass("sticky");
        $("body").removeClass("sticky-soomth");
    }
});
$(".bei-header__fade").click(function() {
    $(".bei-header__navbar .navbar-collapse").removeClass("show");
    $("body").removeClass("overflow");
});
$(".navbar-toggler").click(function() {
    $("body").addClass("overflow");
});
$(".bei-header__close").click(function() {
    $("body").removeClass("overflow");
});
// header section end

// banner video start

$(".bei-digital-ban__thumb ").on('click', function(e) {
    e.preventDefault();
    $(this).parent().find(".bei-digital-ban__video-frame")[0].src += "?autoplay=1 ";
    $(this).parent().find(".bei-digital-ban__video-frame").show();
    $(this).parent().find(".bei-digital-ban__thumb ").hide();
    $(this).hide();
});

// banner video end

// story slider start
$('.bei-stories__story-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite: false,
    draggable: false,
    touchMove: false,
    swipe: false,
    asNavFor: '.bei-stories__slider-nav'
});
$('.bei-stories__slider-nav').slick({    
slidesToShow: 4,
slidesToScroll: 1,
Infinity: false,
asNavFor: '.bei-stories__story-slider',
dots: false,
infinite: false,
focusOnSelect: true,
centerMode: false,
centerPadding: '20%',
prevArrow: $('.bei-stories__slider-arrow--prev'),
nextArrow: $('.bei-stories__slider-arrow--next'),
responsive: [{
    breakpoint: 600,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1
    }
}, ]
});

// story slider end

// story video start
$(".bei-stories__story-slider-img ").on('click', function(e) {
    e.preventDefault();
    $(this).parent().find(".bei-digital-ban__video-frame")[0].src += "?autoplay=1 ";
    $(this).parent().find(".bei-digital-ban__video-frame").show();
    $(this).parent().find(".bei-stories__story-slider-img ").hide();
    $(this).hide();
});

// story video end

// our verticals slider start

$('.bei-verticals__slider-item-slider').slick( {
    dots: true,
    Infinity: false,
    arrows: false,
    fade: false
  });

// our verticals slider end


// email validation

const submit = document.getElementById('submit');

     function validate() {
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    let emailvalue = email.value.includes("@beinex.com");
    var echeck = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!(echeck.test(email.value)) || email.value == "" || email.value == null || (emailvalue == false)) {
        email.classList.add("error");
    }
    else {
      email.classList.remove("error");
    }
    if((phone.value =='') || (phone.value.length <10)){
      phone.classList.add("error");
    }
    else {
      phone.classList.remove("error");
    }
}
submit.addEventListener('click', validate);

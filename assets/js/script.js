const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu-contents");
const body = document.body;
const main = document.querySelector(".main");
const menuLinks = document.querySelectorAll(".menu-contents a");

menuBtn.addEventListener("click", function(){
    this.classList.toggle("active");
    nav.classList.toggle("show");
    if (nav.classList.contains("show")){
        body.style.overflow = "hidden"; //スクロール無効
    } else {
        body.style.overflow = "";
    };
    main.classList.toggle("show");
});

menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        menuBtn.classList.remove("active");
        nav.classList.remove("show");
        body.style.overflow = "";
        main.classList.remove("show");
    });
});



$(function() {
    $(".slider-top").slick({
        centerMode: true,
        variableWidth: true,
        variableHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 9000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: "linear",
        slidesToShow: 7,
        adaptiveHeight: true,
    });
});


$(function() {
    $(".slider-bottom").slick({
        centerMode: true,
        variableWidth: true,
        variableHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 9000,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: "linear",
        slidesToShow: 7,
        adaptiveHeight: true,
        rtl: true,
    });
});



$(".tile-line").slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slideToScroll: 1,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    centerMode: true,
    variableWidth: false,
    dots: false,
});


const contBtn = document.querySelector('.contact-btn');
const targetSection = document.getElementById("target");

contBtn.addEventListener("click", function() {
    targetSection.classList.toggle("highlight");
});







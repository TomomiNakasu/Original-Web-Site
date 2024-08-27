const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu-contents");
const body = document.body;
const main = document.querySelector(".main");

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








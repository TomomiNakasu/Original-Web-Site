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










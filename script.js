document.addEventListener("DOMContentLoaded", function() {
    const swiper = new Swiper('.swiper ', {
        slidesPerView: 1,
        grapCursor:true,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
    });
});
const text=document.querySelector('.text')
const textslist=['Reydon Resources ']
let cindex=0
let currenttext=textslist[0]
textanimation()
function textanimation(){
    text.innerHTML=currenttext.slice(0,cindex)
    cindex++
   
    setTimeout(textanimation,150)
}
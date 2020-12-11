const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3500,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    610: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1050: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
})

$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu,.burger__line-first,.burger__line-second').toggleClass('active');
  });
});
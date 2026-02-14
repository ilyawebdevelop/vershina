import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";

import { Fancybox } from "./modules/fancybox.esm.js";
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);



let searchClearBtn = document.querySelectorAll('.searchW .searchFieldClear');
searchClearBtn.forEach(el => {
  let input = el.closest('.searchW').querySelector('input');

  input.addEventListener("focus", (event) => {
    console.log("Input field received focus!");
    el.classList.add('active');
  });

  el.addEventListener('click', () => {
    input.value = '';
    // input.focus();
    el.classList.remove('active');
  });

});


// Инициализация слайдера productSlider
const introCatSlider = document.querySelector('.introCatSlider');
var mySwiperIntroSlider = new Swiper(introCatSlider, {
  slidesPerView: 'auto',
  spaceBetween: 8,
  speed: 600,
  autoplay: {
    delay: 4000,
  },
});

// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const productSlider = new Swiper(n, {
    slidesPerView: 6,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });
});

// Инициализация слайдера brandsSlider
document.querySelectorAll('.brandsSlider').forEach(n => {
  const brandsSlider = new Swiper(n, {
    slidesPerView: 6,
    spaceBetween: 20,
    speed: 600,
    navigation: {
      prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 6,
      },
    },
  });
});

// Инициализация слайдера brandHeadSlider
document.querySelectorAll('.brandHeadSlider').forEach(n => {
  const brandsHeadSlider = new Swiper(n, {
    slidesPerView: 'auto',
    spaceBetween: 16,
    speed: 600,
    navigation: {
      prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
    },
  });
});

// Инициализация слайдера newsSlider
document.querySelectorAll('.newsSlider').forEach(n => {
  const newsSlider = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n.closest('.sliderW').querySelector('.navArrowPrev'),
      nextEl: n.closest('.sliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      992: {
        slidesPerView: 2,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  });
});

// Инициализация слайдера productMainSlider
const productMainSlider = document.querySelector('.productMainSlider');
var mySwiperProductMain = new Swiper(productMainSlider, {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 600,
  pagination: {
    el: document.querySelector('.productMainSlider .swiper-pagination'),
    clickable: true,
    type: 'bullets',
  },
  fadeEffect: {
    crossFade: true
  },
});

let catCardMoreBtn = document.querySelectorAll('.catCardMoreBtn');
catCardMoreBtn.forEach(el => {
  el.addEventListener('click', () => {
    let list = el.closest('.catCardContent').querySelector('ul');
    list.classList.add('active');
    el.style.display = 'none';
  });
});

let brandHeadSlideArray = document.querySelectorAll('.brandHeadSlider .swiper-slide');
let brandListArray = document.querySelectorAll('.brandsItem');
brandHeadSlideArray.forEach(el => {
  el.addEventListener('click', () => {
    brandHeadSlideArray.forEach(elem => {
      elem.classList.remove('active');
    });
    el.classList.add('active');
    brandListArray.forEach(brandItem => {
      brandItem.classList.remove('active');
      if (el.dataset.title == brandItem.dataset.title) {
        brandItem.classList.add('active');
      }
    });
  });
});

let brandsHideSearchBtn = document.querySelector('.brandsHideSearchBtn');
let brandsSlideAllBrands = document.querySelector('.brandsSlideAllBrands');
let brandSearchContent = document.querySelector('.brandSearchContent');
let brandSliderContent = document.querySelector('.brandSliderContent');

brandsHideSearchBtn?.addEventListener('click', () => {
  brandSearchContent.classList.remove('active');
  brandSliderContent.classList.add('active');
});
brandsSlideAllBrands?.addEventListener('click', () => {
  brandSliderContent.classList.remove('active');
  brandSearchContent.classList.add('active');
});
let mapBuyIframe = document.querySelector('.map-buy iframe');
let mapItemBuyArray = document.querySelectorAll('.map-item-buy');

mapItemBuyArray.forEach(el => {
  el.addEventListener('click', () => {
    mapItemBuyArray.forEach(elem => {
    elem.classList.remove('active');
    });
    mapBuyIframe.src = el.dataset.src;
    el.classList.add('active')
  });
});

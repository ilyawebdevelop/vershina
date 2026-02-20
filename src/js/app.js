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

const togglePassword = document.querySelectorAll('.togglePasswordBtn');
togglePassword.forEach(el => {
  let password = el.closest('.inputW').querySelector('.formInput--password');
  el.addEventListener('click', () => {
    // Toggle the type attribute using
    // getAttribure() method
    const type = password.getAttribute('type') === 'password' ?
      'text' : 'password';
    password.setAttribute('type', type);
  });
});


// Burger
const btnMenu = document.querySelector('#toggle');
const menu = document.querySelector('.headerNavMobile');
const bodyEl = document.querySelector('body');
const searchClose = document.querySelector('.headerSearchMobileClose');

// const toggleMenu = function () {
//   menu.classList.toggle('active');
// }
// const toggleBurger = function () {
//   btnMenu.classList.toggle('active');
// }
const bodyOverflow = function () {
  bodyEl.classList.toggle('hidden');
}
const menuClose = function () {
  toggleBurger();
  bodyOverflow();
  toggleMenu();
}

btnMenu?.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
  toggleBurger();
  bodyOverflow();
});


let headerMenu = document.querySelector('.headerMenu');
let headerBtnCatalogArray = document.querySelectorAll('.headerBtnCatalog');
let headerBtnCatalogMenu = document.querySelector('.headerBtnCatalogMenu');
let headerMenuMobileClose = document.querySelector('.headerMenuMobileClose');

headerBtnCatalogArray.forEach(el => {
  el.addEventListener('click', () => {
    headerMenu.classList.toggle('active');
    bodyOverflow();
  });
});

headerBtnCatalogMenu?.addEventListener('click', () => {
  headerMenu.classList.remove('active');
  bodyOverflow();
});
let headerMenuLiArray = document.querySelectorAll('.headerMenuNav ul li');
let headerMenuNavArray = document.querySelectorAll('.headerMenuNav ul li a');
let headerMenuTabContentArray = document.querySelectorAll('.headerMenuTabContent');
headerMenuNavArray.forEach(el => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    headerMenuLiArray.forEach(menuItem => {
      menuItem.classList.remove('active');
    });
    let li = el.closest('li');
    li.classList.add('active');
    headerMenuTabContentArray.forEach(tabContent => {
      tabContent.classList.remove('active');
      if (el.dataset.id == tabContent.dataset.id) {
        tabContent.classList.add('active');
      }
    });
  })
});

headerMenuMobileClose?.addEventListener('click', () => {
  headerMenu.classList.remove('active');
  bodyOverflow();
});

const scrollButton = document.getElementById('scrollTopBtn');
const scrollThreshold = 500; // Порог в пикселях

// --- 1. Логика показа/скрытия кнопки ---

window.addEventListener('scroll', function () {
  // Получаем текущую позицию скролла
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  if (scrollPosition > scrollThreshold) {
    // Если прокручено более 500px, показываем кнопку с классом 'show'
    scrollButton.classList.add('show');
  } else {
    // Если меньше 500px, скрываем кнопку
    scrollButton.classList.remove('show');
  }
});

// --- 2. Логика плавного скролла при клике ---

scrollButton.addEventListener('click', function (e) {
  e.preventDefault(); // Предотвращаем стандартное поведение (если тег <a>)

  window.scrollTo({
    top: 0, // Цель: начало страницы
    behavior: 'smooth' // Обеспечивает плавный скролл
  });
});

const mediaQueryMin1200 = window.matchMedia('(min-width: 1200px)');
const mediaQueryMax1199 = window.matchMedia('(max-width: 1199px)');

if (mediaQueryMin1200.matches) {
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.headerC');
    // const mainEl = document.querySelector('.main');

    const headerFixed = () => {
      let scrollTop = window.scrollY;
      let heroCenter = 1000;

      if (scrollTop >= heroCenter) {
        header.classList.add('active')
        // mainEl.style.marginTop = `${header.offsetHeight}px`;
      } else {
        header.classList.remove('active')
        // mainEl.style.marginTop = `0px`;
      }
    };

    headerFixed();

    window.addEventListener('scroll', () => {
      headerFixed();
    });
  });
}

if (mediaQueryMax1199.matches) {
  const header = document.querySelector('.headerC');

  let lastScrollTop = 0;
  const headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function () {
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    // --- Условие 1: Проверка, находимся ли мы в самом верху ---

    if (currentScrollTop <= headerHeight) {
      // Если прокрутили до самого верха (или чуть ниже высоты шапки)
      header.classList.remove('header-fixed-hide');
      header.classList.remove('active');
      header.classList.add('at-top'); // Добавляем класс, чтобы сбросить стили
    } else {
      // Если мы не в самом верху
      header.classList.add('active');
      header.classList.remove('at-top'); // Убираем класс "вверху"

      // --- Условие 2: Определение направления скролла ---

      if (currentScrollTop > lastScrollTop) {
        // Скролл ВНИЗ: Скрываем шапку
        header.classList.add('header-fixed-hide');
      } else {
        // Скролл ВВЕРХ (и currentScrollTop > headerHeight): Показываем шапку
        header.classList.remove('header-fixed-hide');
      }
    }

    // Обновляем предыдущую позицию скролла
    lastScrollTop = currentScrollTop;
  });

  // Инициализация: Убедимся, что при загрузке, если мы уже не вверху, 
  // шапка сразу находится в правильном состоянии (скрыта или активна)
  window.dispatchEvent(new Event('scroll'));
}

let modalCookie = document.querySelector('.modal-cookie');
let modalCookieClose = document.querySelector('.modal-cookie-close');
let modalCookieSuccess = document.querySelector('.modal-cookie-success');
modalCookieClose?.addEventListener('click', () => {
  modalCookie.classList.add('d-none');
});
modalCookieSuccess?.addEventListener('click', () => {
  modalCookie.classList.add('d-none');
});

let mainNav = document.querySelector('.headerBNav');
let mainNavList = document.querySelectorAll('.headerBNav>ul>li:not(.no-wrap)');
let subMenuItemsNoWrap = document.querySelector('.sub-menu-items-no-wrap');

const containerTop = mainNav.offsetTop;
const hiddenItems = Array.from(mainNavList).filter(item => {
  // Сравниваем верхнюю границу элемента с верхней границей первой строки
  return item.offsetTop > containerTop;
});
hiddenItems.forEach(el => {
  subMenuItemsNoWrap.appendChild(el);
});

let headerMenuMobileItems = document.querySelectorAll('.headerMenuMobileNav>ul>li');
headerMenuMobileItems.forEach(el => {
  if (el.classList.contains('active')) {
    el.querySelector('.submenu').style.display = 'block';
  }
});


$('.headerMenuMobileNav>ul>li').click(function () {
  const $currentContent = $(this).find('ul');
  const $currentParent = $(this);
  $('.headerMenuMobileNav>ul>li>ul').not($currentContent).slideUp(300);
  $('.headerMenuMobileNav>ul>li').not($currentParent).removeClass('active');
  $(this).toggleClass('active');
  $(this).find('ul').slideToggle();
});



// console.log('Элементы, не влезшие в строку:', hiddenItems);
let profileBtnMobile = document.querySelector('#profile-btn-mobile>a');
profileBtnMobile.addEventListener('click', (event) => {
  event.preventDefault();

  let menu = profileBtnMobile.nextElementSibling;
  console.log(menu);
  menu.classList.toggle('active');

})
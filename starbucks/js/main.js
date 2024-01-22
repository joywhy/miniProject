const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', () => {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', () => {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합 검색');
  //   html 속성을 지정한다.
});

// 포커스가 해제
searchInputEl.addEventListener('blur', () => {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
  //   html 속성을 지정한다.
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener(
  'scroll',
  _.throttle(() => {
    // console.log(window.scrollY);
    // badgeEl.style.display = window.scrollY > 500 ? 'none' : 'block';

    if (window.scrollY > 500) {
      // gsap.to(요소,지속시간-초단위,옵션)
      gsap.to(badgeEl, 0.6, {
        opacity: 0,
        display: 'none',
        // 숫자는 그대로 작성하는데 문자열은 '' 에 감싸기
      });
    } else {
      gsap.to(badgeEl, 0.6, {
        opacity: 1,
        display: 'block',
      });
    }
  }, 300)
);

const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach((fadeEl, index) => {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, //0.7초 1.4초 2.1초
    opacity: 1,
  });
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal', //
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백 10px
  centeredSlides: true, // 1번 슬라이드가 가운데에 보이는 지
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  },
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');

let isHidePromotion = false;
// 초깃값은 보여지고 있음

promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

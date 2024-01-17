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
      // gsap.to(요소,지속시간,옵션)
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

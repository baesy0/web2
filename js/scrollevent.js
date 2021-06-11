const scrollOffset = 300; // 300px 이상 내리면 이벤트가 발생한다.
const scrollElement = document.querySelector(".js-scroll");

const elementInView = (el, offset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <= 
    ((window.innerHeight || document.documentElement.clientHeight) - offset)
  );
};

const displayScrollElement = () => {
  scrollElement.classList.add('scrolled');
}

const hideScrollElement = () => {
  scrollElement.classList.remove('scrolled');
}

const handleScrollAnimation = () => {
  if (elementInView(scrollElement, scrollOffset)) {
    displayScrollElement(scrollElement);
  } else {
    hideScrollElement(scrollElement);
  }
}

// 윈도우즈에서 스크롤 이벤드가 발생하면 handleScrollAnimation 함수를 실행한다.
window.addEventListener('scroll', () => {
  handleScrollAnimation();
})
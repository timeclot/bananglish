export default function preloader() {
  const hidePreloader = function() {
    const SECONDS_IN_MINUTES = 1000;
    const duration = 1.5;
    const delay = 2;
    const summTime = (duration + delay) * SECONDS_IN_MINUTES;
    const rootNode = document.querySelector(`:root`);
    const preloaderNode = document.querySelector(`.preloader`);

    rootNode.style.setProperty(`--anim-delay`, `${delay}s`);
    rootNode.style.setProperty(`--anim-duration`, `${duration}s`);

    preloaderNode.classList.add(`preloader_opacity`);
    setTimeout(() => {
      preloaderNode.classList.add(`preloader_hidden`);
      preloaderNode.classList.remove(`preloader_opacity`);
      preloaderNode.removeAttribute(`style`);
    }, summTime);
  }

  window.addEventListener(`load`, (evt) => {
    hidePreloader();
  })
  console.log('прелоадер');
}
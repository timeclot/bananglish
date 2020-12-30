import scrollToTarget from './scroll-to-target.js';

export default function scrollToAnchor() {
  var scrollAnim;
  const linksNode = document.querySelector('.sounds');
  const linkNodes = [...linksNode.querySelectorAll('a[href^="#"]')];
  const infoBlockNodes = [...document.querySelectorAll('.info-block')];
  const pageItemNodes = [...document.querySelectorAll('.page__subtitle')];
  const sectionNodes = [...infoBlockNodes, ...pageItemNodes];
  let activeNode = sectionNodes[0];

  linkNodes.forEach((it) => {
    it.addEventListener("click", function(evt) {
      evt.preventDefault();
      const target = document.querySelector(evt.currentTarget.getAttribute("href"));
      if (target != null) {

        scrollToTarget(target);
      }
    });
  });

  activeNode.classList.add('sounds__link_active');

  let intervalId = null;

  const setActiveLink = function() {
    sectionNodes.forEach((it) => {
      const top =  window.scrollY + it.getBoundingClientRect().top - 32;
      const bottom = top + it.offsetHeight
      const scroll =  window.scrollY;
      const id = it.getAttribute('id');
      const linkNode = linksNode.querySelector('a[href="#'+id+'"]');
      if (scroll > top && scroll < bottom) {
        activeNode.classList.remove('sounds__link_active');
        linkNode.classList.add('sounds__link_active');
        activeNode = linkNode;
      }
    })

  }

  setActiveLink();

  window.addEventListener('scroll', (evt) => {
    intervalId = setTimeout(() => {
      setActiveLink();
    }, 1000);
  })
}


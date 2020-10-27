(function() {
  var scrollAnim;
  const linksNode = document.querySelector('.sounds');
  const linkNodes = [...linksNode.querySelectorAll('a[href^="#"]')];
  const infoBlockNodes = [...document.querySelectorAll('.info-block')];
  const pageItemNodes = [...document.querySelectorAll('.page__subtitle')];
  const sectionNodes = [...infoBlockNodes, ...pageItemNodes];
  let activeNode = sectionNodes[0];

  linkNodes.forEach((it) => {
    it.addEventListener("click", function(event) {

    const target = document.querySelector(this.getAttribute("href"));
    if (target != null) {
      event.preventDefault();
      clearTimeout(scrollAnim);
      let scrollMaxHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
      let scroll = target.offsetTop;
      const animTime = 400;//ms
      const step = (scroll - window.scrollY) / 60 / (animTime / 1000);
      if(scrollMaxHeight - scroll <= window.innerHeight)
        scroll = scrollMaxHeight - window.innerHeight;
      (function(){
        if(Math.abs(window.scrollY - scroll) <= Math.abs(step)) {
          window.scrollTo( 0, scroll);
          return;
        }
        window.scrollTo( 0,parseFloat(window.scrollY) + step);
        scrollAnim = setTimeout(arguments.callee, 1000 / 60);
      })();
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

})()


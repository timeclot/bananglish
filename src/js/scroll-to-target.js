export default function scrollToTarget(target) {
  let scrollTimeoutId = null;
  const scrollMaxHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  let scroll = target.offsetTop;
  const animTime = 800;
  const step = (scroll - window.scrollY) / 90 / (animTime / 1000);

  if (scrollMaxHeight - scroll <= window.innerHeight)
    scroll = scrollMaxHeight - window.innerHeight;
    function scroller() {
      if(Math.abs(window.scrollY - scroll) <= Math.abs(step)) {
        window.scrollTo(0, scroll);
        clearTimeout(scrollTimeoutId);
        return;
      }
      window.scrollTo(0, parseFloat(window.scrollY) + step);
      scrollTimeoutId = setTimeout(scroller, 1000 / 60);
    };

  scroller();
}

!function(){var e;const t=document.querySelector(".sounds"),o=[...t.querySelectorAll('a[href^="#"]')],n=[...[...document.querySelectorAll(".info-block")],...[...document.querySelectorAll(".page__subtitle")]];let l=n[0];o.forEach(t=>{t.addEventListener("click",(function(t){const o=document.querySelector(this.getAttribute("href"));if(null!=o){t.preventDefault(),clearTimeout(e);let n=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight),l=o.offsetTop;const c=400,i=(l-window.scrollY)/60/(c/1e3);n-l<=window.innerHeight&&(l=n-window.innerHeight),function(){Math.abs(window.scrollY-l)<=Math.abs(i)?window.scrollTo(0,l):(window.scrollTo(0,parseFloat(window.scrollY)+i),e=setTimeout(arguments.callee,1e3/60))}()}}))}),l.classList.add("sounds__link_active");let c=null;const i=function(){n.forEach(e=>{const o=window.scrollY+e.getBoundingClientRect().top-32,n=o+e.offsetHeight,c=window.scrollY,i=e.getAttribute("id"),s=t.querySelector('a[href="#'+i+'"]');c>o&&c<n&&(l.classList.remove("sounds__link_active"),s.classList.add("sounds__link_active"),l=s)})};i(),window.addEventListener("scroll",e=>{c=setTimeout(()=>{i()},1e3)})}();
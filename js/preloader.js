window.addEventListener("load",e=>{!function(){const e=document.querySelector(":root"),t=document.querySelector(".preloader");e.style.setProperty("--anim-delay","2s"),e.style.setProperty("--anim-duration","1.5s"),t.classList.add("preloader_opacity"),setTimeout(()=>{t.classList.add("preloader_hidden"),t.classList.remove("preloader_opacity"),t.removeAttribute("style")},3500)}()}),console.log("прелоадер");
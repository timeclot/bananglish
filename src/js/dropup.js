(function(){
  class DropUp {
    constructor(selector) {
      const SECONDS_IN_MINUTES = 1000;
      this.btnNode = document.querySelector(`.btn_menu`);
      this.overlayNode = document.querySelector(`.overlay`);
      this.menuNode = document.querySelector(selector);
      this.duration = 0.5;
      this.summTime = 0.5 * 1000;
      // if (window.matchMedia("(max-width: 768px)").matches) {
          this.btnNode.classList.add(`btn_hamburger`);
          this.btnNode.classList.remove(`btn_hidden`);
          this.menuNode.classList.add(`dropup`);
          this.menuNode.classList.add(`dropup_hidden`);
          this.btnNode.addEventListener(`click`, (evt) => {
            evt.preventDefault();
            this.onBtnNodeClick(evt);
          })
            this.overlayNode.addEventListener(`click`, (evt) => {
              evt.preventDefault();
              this.onOverlayClick(evt);
          })
        }
      // }

      onBtnNodeClick() {
        this.toggleMenuVisible();
      }

      onOverlayClick() {
        this.toggleMenuVisible();
      }

      isMenuHidden() {
        return this.menuNode.classList.contains(`dropup_mibile-hidden`);
      }

      toggleMenuVisible() {
        if (this.isMenuHidden()) {
          this.menuNode.classList.remove(`dropup_mibile-hidden`);
          this.overlayNode.classList.remove(`overlay_hidden`);
          this.overlayNode.classList.add(`overlay_visible`);
          this.menuNode.style.animationDuration = `${this.duration}s`;
          this.menuNode.classList.add(`dropup_show`);
          this.btnNode.classList.remove(`btn_hamburger`);
          this.btnNode.classList.add(`btn_close`);
          this.overlayNode.classList.remove(`btn_hidden`);
        } else {
          this.menuNode.classList.remove(`dropup_show`);
          this.menuNode.style.animationDuration = `${this.duration}s`;
          this.menuNode.classList.add(`dropup_hide`);
          this.btnNode.classList.add(`btn_hamburger`);
          this.btnNode.classList.remove(`btn_close`);
          this.overlayNode.classList.add(`btn_hidden`);
          this.overlayNode.classList.remove(`overlay_visible`);
          setTimeout(() => {
            this.menuNode.classList.add(`dropup_mibile-hidden`);
            this.menuNode.classList.remove(`dropup_hide`);
            this.overlayNode.classList.add(`overlay_hidden`);
          }, this.summTime)
        }
      }
  }

  const dropUp = new DropUp(`.page__nav`);
})()
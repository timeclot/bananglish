new class{constructor(e){this.btnNode=document.querySelector(".btn_menu"),this.overlayNode=document.querySelector(".overlay"),this.menuNode=document.querySelector(e),this.duration=.5,this.summTime=500,this.btnNode.classList.add("btn_hamburger"),this.btnNode.classList.remove("btn_hidden"),this.menuNode.classList.add("dropup"),this.menuNode.classList.add("dropup_hidden"),this.btnNode.addEventListener("click",e=>{e.preventDefault(),this.onBtnNodeClick(e)}),this.overlayNode.addEventListener("click",e=>{e.preventDefault(),this.onOverlayClick(e)})}onBtnNodeClick(){this.toggleMenuVisible()}onOverlayClick(){this.toggleMenuVisible()}isMenuHidden(){return this.menuNode.classList.contains("dropup_mibile-hidden")}toggleMenuVisible(){this.isMenuHidden()?(this.menuNode.classList.remove("dropup_mibile-hidden"),this.overlayNode.classList.remove("overlay_hidden"),this.overlayNode.classList.add("overlay_visible"),this.menuNode.style.animationDuration=this.duration+"s",this.menuNode.classList.add("dropup_show"),this.btnNode.classList.remove("btn_hamburger"),this.btnNode.classList.add("btn_close"),this.overlayNode.classList.remove("btn_hidden")):(this.menuNode.classList.remove("dropup_show"),this.menuNode.style.animationDuration=this.duration+"s",this.menuNode.classList.add("dropup_hide"),this.btnNode.classList.add("btn_hamburger"),this.btnNode.classList.remove("btn_close"),this.overlayNode.classList.add("btn_hidden"),this.overlayNode.classList.remove("overlay_visible"),setTimeout(()=>{this.menuNode.classList.add("dropup_mibile-hidden"),this.menuNode.classList.remove("dropup_hide"),this.overlayNode.classList.add("overlay_hidden")},this.summTime))}}(".page__nav");
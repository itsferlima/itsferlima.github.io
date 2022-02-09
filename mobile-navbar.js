class MobileNavBar {
  constructor(mobileMenu, navItens, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navItens = document.querySelector(navItens);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = 'active';

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks (){
    this.navLinks.forEach((link, index) => {
      
      link.style.animation 
        ? (link.style.animation = "")
        : (link.style.animation = `navItensFade 0.5s ease forwards ${index / 7 + 0.3}s`);

    });
  }
  
  handleClick() {
    this.navItens.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init(){
    if (this.mobileMenu){
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavBar = new MobileNavBar (

  ".menu",
  ".nav-itens",
  ".nav-itens a",
);
mobileNavBar.init();

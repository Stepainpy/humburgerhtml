class Navigator {
    mobimeMenuButton = null;
    mobileMenu = null;
    mobimeMenuButtonClass = "burger";
    mobileMenuClass = "mobile-nav";

    constructor() {
        this.init();
        this.bindEvents();
    }

    init() {
        this.mobileMenu = document.querySelector(`.${this.mobileMenuClass}`);
        this.mobimeMenuButton = document.querySelector(`.${this.mobimeMenuButtonClass}`);
    }

    bindEvents() {
        if (this.mobileMenu == undefined || this.mobimeMenuButton == undefined) {
            console.log("Error");
            return
        }

        this.mobimeMenuButton.addEventListener("click", () => {
            console.log(this);
            this.mobileMenu.classList.toggle("active");
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Navigator();
})
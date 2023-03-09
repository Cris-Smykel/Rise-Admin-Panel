const _domController = new WeakMap();

export class HeaderController {
    constructor(domController) {
        _domController.set(this, domController);
    }

    get domController() {
        return _domController.get(this);
    }

    main() {
        this.getAsideBar();
    }

    getAsideBar() {
        const getAsideButton = document.querySelector(".open-menu");

        getAsideButton.addEventListener("click", (e) => {
            if (
                this.domController.hasClass(
                    getAsideButton,
                    this.domController.activeElement
                )
            ) {
                this.domController.removeClass(
                    getAsideButton,
                    this.domController.activeElement
                );
            } else {
                this.domController.addClass(
                    getAsideButton,
                    this.domController.activeElement
                );
            }
        });
    }
}

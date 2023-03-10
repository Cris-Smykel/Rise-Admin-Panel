const _domController = new WeakMap();
const _header = new WeakMap();

export class HeaderController {
    constructor(domController) {
        _domController.set(this, domController);
        _header.set(this, document.querySelector(".header"));
    }

    get domController() {
        return _domController.get(this);
    }

    get header() {
        return _header.get(this);
    }

    main() {
        this.getAsideBar();
    }

    getAsideBar() {
        const getAsideButton = document.querySelector(".open-menu");
        const asideBarContainer = document.querySelector(".aside");
        const mainContainer = document.querySelector(".main");

        getAsideButton.addEventListener("click", (e) => {
            if (
                this.domController.hasClass(
                    getAsideButton,
                    this.domController.activeElement
                )
            ) {
                this.domController.removeClass(
                    [
                        getAsideButton,
                        asideBarContainer,
                        mainContainer,
                        this.header,
                    ],
                    this.domController.activeElement
                );
            } else {
                this.domController.addClass(
                    [
                        getAsideButton,
                        asideBarContainer,
                        mainContainer,
                        this.header,
                    ],
                    this.domController.activeElement
                );
            }
        });
    }
}

const _activeElement = new WeakMap();

export class DomController {
    constructor() {
        _activeElement.set(this, "active");
        this.getPostStateContent();
    }

    get activeElement() {
        return _activeElement.get(this);
    }

    addClass(elements, className) {
        if (Array.isArray(elements)) {
            elements.forEach((element) => {
                element.classList.add(className);
            });

            return;
        }

        elements.classList.add(className);
    }

    removeClass(elements, className) {
        if (Array.isArray(elements) || elements instanceof NodeList) {
            elements.forEach((element) => {
                element.classList.remove(className);
            });

            return;
        }

        elements.classList.remove(className);
    }

    hasClass(element, className) {
        if (element.classList.contains(className)) {
            return true;
        }

        return false;
    }

    getLoader() {
        const loaderContainer = document.createElement("div");
        const loader = document.createElement("div");

        this.addClass(loaderContainer, "loader-container");
        this.addClass(loader, "loader");

        loaderContainer.appendChild(loader);

        return loaderContainer;
    }

    getPostStateContent() {
        window.addEventListener("popstate", (e) => {
            const currentUrl = window.location.href;

            const anchor = document.querySelector(`a[href='${currentUrl}']`);
            if (anchor) {
                anchor.click();
            }
        });
    }
}

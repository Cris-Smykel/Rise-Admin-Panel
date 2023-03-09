const _activeElement = new WeakMap();

export class DomController {
    constructor() {
        _activeElement.set(this, "active");
    }

    get activeElement() {
        return _activeElement.get(this);
    }

    addClass(elements, className) {
        if (elements instanceof NodeList) {
            elements.forEach((element) => {
                element.classList.add(className);
            });

            return;
        }

        elements.classList.add(className);
    }

    removeClass(elements, className) {
        if (elements instanceof NodeList) {
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
}

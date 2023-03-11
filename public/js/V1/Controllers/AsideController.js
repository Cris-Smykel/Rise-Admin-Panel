const _asideAnchors = new WeakMap();
const _domController = new WeakMap();
const _requestController = new WeakMap();

export class AsideController {
    constructor(domController, requestController) {
        _asideAnchors.set(this, document.querySelectorAll(".aside-anchor"));
        _domController.set(this, domController);
        _requestController.set(this, requestController);

        this.mainContainer = document.querySelector(".main");
        this.pageTitle = document.querySelector("title");
        this.htmlHead = document.querySelector("head");
        this.currentScript = document.currentScript;
    }

    get domController() {
        return _domController.get(this);
    }

    get requestController() {
        return _requestController.get(this);
    }

    main() {
        this.getAsideAnchors();
    }

    getAsideAnchors() {
        const requestInfo = {
            method: "GET",
            responseAction: this.getAsideResponseAction.bind(this),
        };

        const loaderContainer = this.domController.getLoader();

        _asideAnchors.get(this).forEach((anchor) => {
            anchor.addEventListener("click", (e) => {
                e.preventDefault();

                if (
                    this.domController.hasClass(
                        anchor,
                        this.domController.activeElement
                    )
                ) {
                    return;
                }

                this.domController.removeClass(
                    _asideAnchors.get(this),
                    this.domController.activeElement
                );
                this.domController.addClass(
                    anchor,
                    this.domController.activeElement
                );

                requestInfo.url = anchor.getAttribute("href");
                this.mainContainer.appendChild(loaderContainer);

                this.requestController.sendRequest(requestInfo);

                if (window.location.href !== requestInfo.url) {
                    window.history.pushState(null, "page", requestInfo.url);
                }
            });
        });
    }

    getAsideResponseAction(response, requestInfo) {
        const parser = new DOMParser();
        const domResponse = parser.parseFromString(response, "text/html");
        const mainResponse = domResponse.querySelector(".main");

        const pageTitleResponse = domResponse.querySelector("title");
        this.pageTitle.innerHTML = pageTitleResponse.innerHTML;

        this.mainContainer.innerHTML = mainResponse.innerHTML;

        this.getNewScriptElement(domResponse, requestInfo);
    }

    getNewScriptElement(domResponse, requestInfo) {
        const scripts = document.querySelectorAll("script[defer]");
        const otherScripts = Array.from(scripts).filter(
            (script) => script !== this.currentScript
        );

        otherScripts.forEach((script) => {
            script.remove();
        });

        let newScriptHasString;
        if (requestInfo.url.includes("contato")) {
            newScriptHasString = "contact";
        } else if (requestInfo.url.includes("newsletter")) {
            newScriptHasString = "newsletter";
        } else if (requestInfo.url.includes("produtos")) {
            newScriptHasString = "products";
        } else if (requestInfo.url.includes("blog")) {
            newScriptHasString = "blog";
        }

        const newScript = domResponse.querySelector(
            `script[src*=${newScriptHasString}]`
        );

        if (newScript) {
            const newScriptToUse = document.createElement("script");
            newScriptToUse.src = newScript.src;

            newScriptToUse.setAttribute("defer", true);

            this.htmlHead.appendChild(newScriptToUse);
        }
    }
}

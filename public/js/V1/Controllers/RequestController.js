const _success = new WeakMap();
const _serverError = new WeakMap();

const _contentLoaded = new WeakMap();

const _csrfToken = new WeakMap();

export class RequestController {
    constructor() {
        _success.set(this, 200);
        _serverError.set(this, 500);

        _contentLoaded.set(this, 4);

        _csrfToken.set(
            this,
            document
                .querySelector("meta[name='csrf-token']")
                .getAttribute("content")
        );
    }

    get success() {
        return _success.get(this);
    }

    get contentLoaded() {
        return _contentLoaded.get(this);
    }

    sendRequest(requestInfo) {
        const method = requestInfo.method;
        const url = requestInfo.url;
        const body = requestInfo.body;

        const request = new XMLHttpRequest();

        request.onreadystatechange = (e) => {
            if (
                request.status === this.success &&
                request.readyState === this.contentLoaded
            ) {
                const response = request.responseText;
                requestInfo.responseAction(response, requestInfo);
            }
        };

        request.open(method, url, true);
        request.setRequestHeader("X-CSRF-Token", _csrfToken.get(this));
        request.send(body);
    }
}

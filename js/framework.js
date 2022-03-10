class Reactive {
    constructor(options) {
        this.origin = options.data();
    }

    mount() {
        document.querySelectorAll('*[x-text]').forEach(el => {
            this.xText(el, this.origin, el.getAttribute('x-text'));
        })
    }

    xText(el, target, name) {
        el.textContent = target[name];
    }

    xModel() {}
}

function createApp(options) {
    return new Reactive(options);
}

export { createApp };
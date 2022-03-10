class Reactive {
    constructor(options) {
        this.origin = options.data();
        this.$data = new Proxy(this.origin, {
            get(target, name) {
                if ( name in target ) {
                    return target[name];
                }

                console.warn(`${name} is not defined in data`);
                return '';
            },
        });
    }

    mount() {
        document.querySelectorAll('*[x-text]').forEach(el => {
            this.xText(el, this.$data, el.getAttribute('x-text'));
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
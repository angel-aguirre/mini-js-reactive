class Reactive {
    constructor(options) {
        this.origin = options.data();
        this.$data = new Proxy(this.origin, {
            get(target, name) {
                if ( Reflect.has(target, name) ) {
                    return Reflect.get(target, name);
                }

                console.warn(`${name} is not defined in data`);
                return '';
            },
            set(target, name, value) {
                Reflect.set(target, name, value);
            },
        });
    }

    mount() {
        document.querySelectorAll('*[x-text]').forEach(el => {
            this.xText(el, this.$data, el.getAttribute('x-text'));
        });

        document.querySelectorAll('*[x-model]').forEach(el => {
            const name = el.getAttribute('x-model');
            this.xModel(el, this.$data, name);

            el.addEventListener('input', () => {
                Reflect.set(this.$data, name, el.value);
            });
        });
    }

    xText(el, target, name) {
        el.textContent = Reflect.get(target, name);
    }

    xModel(el, target, name) {
        el.value = Reflect.get(target, name);
    }
}

function createApp(options) {
    return new Reactive(options);
}

export { createApp };
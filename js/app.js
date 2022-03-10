import { createApp } from './framework.js';

const app = createApp({
    data() {
        return {
            message: 'Hello from micro framework!',
        }
    }
});

app.mount();
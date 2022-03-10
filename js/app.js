import { createApp } from './framework.js';

const app = createApp({
    data() {
        return {
            message: 'Hello from micro framework!',
            image: 'https://via.placeholder.com/200',
        }
    }
});

app.mount();
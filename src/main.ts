import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

const app = createApp(App);

app.directive('select', {
    mounted(el: HTMLElement, binding: any, vNode: any): void {
        console.log(vNode);
        
    },
})

app
.mount('#app');

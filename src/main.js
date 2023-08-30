
import { createApp } from 'vue'
import App from './app/App.vue';
import uiComponents from './ui-components';

const app = createApp(App);
uiComponents.map(component => app.component(component.name, component))


app.mount('#app')

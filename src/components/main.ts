import { createApp } from 'vue';
import App from './App.vue';
import {Button, Icon, NavBar, Tabbar, TabbarItem} from 'vant';
import 'vant/lib/index.css';

const app = createApp(App);

app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(TabbarItem);
app.use(Tabbar);
app.mount('#app');
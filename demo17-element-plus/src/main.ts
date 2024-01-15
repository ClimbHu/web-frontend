import { createApp } from "vue";
//导入element-plus相关内容
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";

const app = createApp(App);

app.use(ElementPlus);
app.mount("#app");

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import store from './store/index';
import LoginUser from "./components/pages/LoginUser.vue";
import DashBoard from "./components/pages/DashBoard.vue";
import NotFound from "./components/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      component: LoginUser,
    },

    {
      path: "/dashboard",props:true,
      component: DashBoard,
      
    },
   
 
    {
      path: "/:NotFound(.*)",
      component: NotFound,
    },
  ],
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

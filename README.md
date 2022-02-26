# Kisaan Madad

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

============================================

## Official Links-

1.  [vuex](https://vuex.vuejs.org/installation.html) is for state management.
2.  [Router](https://router.vuejs.org/guide/#router-view) for create page routes.
3.  [Routes detail](https://vuejs.org/guide/scaling-up/routing.html#official-router) and old features.
4.  [i18](https://kazupon.github.io/vue-i18n/) use for localization means use multipale languages in application.

## Add route in project -

### insall router -

For hlep use this link - [vuemastery.com](https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/)

    npm i vue-router@next

A. Make new directory routes in in src folder and create route.js file in routes directory.

B. write below code in router.js

        import { createWebHistory, createRouter } from "vue-router";
        import Home from "../components/Home.vue";

        const routes = [
            {
                path: "/",
                name: "Home",
                component: Home,
            }
        ];

        const router = createRouter({
            history: createWebHistory(),
            routes,
        });

        export default router;

C. Configure main.js file -

        import { createApp } from 'vue'
        import App from './App.vue'

        createApp(App).mount('#app')

<center> To </center><br>

        import { createApp } from 'vue'
        import App from './App.vue'
        import route from './routes/router';

        const app = createApp(App);
        app.use(route);
        app.mount('#app');

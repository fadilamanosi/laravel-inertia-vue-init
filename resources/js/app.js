

import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { InertiaProgress } from "@inertiajs/progress";


InertiaProgress.init({
    delay: 0,
    color: "green",
    showSpinner: true
});


createInertiaApp({

    resolve: async (name) => {
        let page = (await import(`./Pages/${name}.vue`));

        /** Can define default root condition here.. useful whe usind vue-slots */
        // E.g page.default.layout = name.startsWith('app') ? headerVue : undefined

        return page
    },
    
    /** Uncomment and comment above code to simply lookup Pages folder */
    // resolve: (name) => {
    //    return resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
    // },
    setup({ el, App, props, plugin }) {
        const VueApp = createApp({ render: () => h(App, props) });

        VueApp.use(plugin)
            .mixin({ methods: { route } })
            .mount(el)
    },
});
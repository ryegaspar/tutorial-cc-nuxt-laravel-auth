export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    router: {
        middleware: [
            'clearValidationErrors'
        ]
    },

    plugins: [
        './plugins/mixins/user',
        './plugins/mixins/validation',
        './plugins/axios'
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/auth'
    ],

    axios: {
        baseURL: 'http://cc-nuxt-laravel-auth.test/api'
    },

    auth: {
        strategies: {
            local: {
                endpoints: {
                    login: {
                        url: 'login', method: 'post', propertyName: 'meta.token'
                    },
                    user: {
                        url: 'me', method: 'get', propertyName: 'data'
                    },
                    logout: {
                        url: 'logout', method: 'post'
                    }
                }
            }
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    }
}

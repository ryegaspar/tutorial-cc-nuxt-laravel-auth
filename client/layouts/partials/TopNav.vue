<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <nuxt-link class="navbar-item" :to="{ name: 'index' }">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
            </nuxt-link>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>

        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item" v-if="!authenticated">
                    <div class="buttons">
                        <nuxt-link :to="{ name: 'auth-signup' }" class="button is-primary">
                            <!-- in nuxt, auth-signup references to auth/signup in pages-->
                            <strong>Sign up</strong>
                        </nuxt-link>
                        <nuxt-link :to="{ name: 'auth-signin' }" class="button is-light">
                            Log in
                        </nuxt-link>
                    </div>
                </div>

                <div v-else class="navbar-item has-dropdown is-hoverable">
                    <a href="#" class="navbar-link">{{ user.name }}</a>

                    <div class="navbar-dropdown">
                        <a href="#" class="navbar-item" @click.prevent="logout">
                            Logout
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
	// import { mapGetters } from 'vuex';
	//
	// export default {
	// 	computed: {
	// 		...mapGetters({
	//             loggedIn: 'auth/loggedIn'
	//         })
	//     }
	// } ** instead of this use global mixins, so you can reference loggedIn globally
    export default {
    	methods: {
    		logout() {
    			this.$auth.logout();
            }
        }
    }
</script>

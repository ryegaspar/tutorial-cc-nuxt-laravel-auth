<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h1 class="title has-text-grey">Sign In</h1>
                    <div class="box">
                        <form action="#" @submit.prevent="submit">
                            <div class="field">
                                <div class="control">
                                    <label for="email" class="label">Email address</label>
                                    <input class="input is-large"
                                           type="email"
                                           id="email"
                                           placeholder="e.g. john@example.com"
                                           autofocus=""
                                           v-model="form.email"
                                           :class="{ 'is-danger' : errors.email }"
                                    >
                                    <p class="help is-danger" v-if="errors.email">{{ errors.email[0] }}</p>
                                </div>
                            </div>

                            <div class="field">
                                <div class="control">
                                    <label for="password" class="label">Password</label>
                                    <input class="input is-large"
                                           type="password"
                                           id="password"
                                           v-model="form.password"
                                           :class="{ 'is-danger' : errors.password }"
                                    >
                                    <p class="help is-danger" v-if="errors.password">{{ errors.password[0] }}</p>
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		middleware: ['guest'],

		data() {
			return {
				form: {
					email: '',
					password: '',
				}
			}
		},

		methods: {
			async submit() {
				try { //wrap it with try catch or nuxt will force you a 422 error page.
					await this.$auth.login({
						data: this.form
					});

					this.$router.push({
						path: '/'
					});

				} catch (err) {

				}
			}
		}
	}
</script>

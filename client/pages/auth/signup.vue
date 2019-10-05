<template>
    <section class="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="column is-4 is-offset-4">
                    <h1 class="title has-text-grey">Join Us</h1>
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
                                    <label for="name" class="label">Full name</label>
                                    <input class="input is-large"
                                           type="text"
                                           id="name"
                                           placeholder="e.g. John Doe"
                                           autofocus=""
                                           v-model="form.name"
                                           :class="{ 'is-danger' : errors.name }"
                                    >
                                    <p class="help is-danger" v-if="errors.name">{{ errors.name[0] }}</p>
                                </div>
                            </div>


                            <div class="field">
                                <div class="control">
                                    <label for="password" class="label">Choose a password</label>
                                    <input class="input is-large"
                                           type="password"
                                           id="password"
                                           v-model="form.password"
                                           :class="{ 'is-danger' : errors.password }"
                                    >
                                    <p class="help is-danger" v-if="errors.password">{{ errors.password[0] }}</p>
                                </div>
                            </div>
                            <button class="button is-block is-info is-large is-fullwidth">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					email: '',
					name: '',
					password: ''
				}
			}
		},

		methods: {
			async submit() {
				try {
					await this.$axios.post('register', this.form);

					await this.$auth.login({
						data: this.form
					});

					this.$router.push({
						name: 'index'
					});
				} catch (err) {

				}
			}
		}
	}
</script>

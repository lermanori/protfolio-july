<template>
  <div class="flex flex-col justify-center h-screen w-full">
    <div class="text-center" v-if="Email_state==='not-active'">
      <h1>
        CONTACT ME AT
        <a
          href="mailto:lermanori@gmail.com"
          class="hover:text-blue-400 underline"
        >LERMANORI@GMAIL.COM</a>
      </h1>
      <h1>OR FILL THIS FORM</h1>
    </div>
    <div class="flex justify-center" v-if="Email_state==='not-active'">
      <form class="border p-4 w-auto mx-8 font-md shadow-xl" @submit.prevent="handleSubmit">
        <div class="my-2 p-4">
          <label class="text-2xl capitalize">email:</label>
          <input
            class="w-full"
            type="email"
            v-model="contact.mail"
            placeholder="Enter your email"
            required
          />
        </div>
        <div class="my-2 p-4">
          <label class="text-2xl capitalize">mobile:</label>
          <input
            class="w-full"
            type="tel"
            v-model="contact.phone"
            placeholder="Enter your mobile (optional)"
          />
        </div>
        <div class="my-2 p-4">
          <label class="text-2xl capitalize">name:</label>
          <input
            class="w-full"
            type="text"
            v-model="contact.name"
            placeholder="Enter your name here"
          />
        </div>
        <div class="my-2 p-4">
          <div>
            <label class="text-2xl capitalize">body:</label>
          </div>
          <textarea
            class="w-full"
            v-model="contact.body"
            placeholder="Enter subjects body here"
            required
          />
        </div>
        <div class="text-center">
          <input type="submit" value="SUBMIT" class="hover:text-blue-400" />
        </div>
      </form>
    </div>
    <emailAnimation
      class="text-black h-full w-64 mx-auto"
      :state.sync="Email_state"
      v-if="Email_state!=='not-active'"
    >
      <template v-slot:loading_text>
        <h1 class="text-black font-lg text-center text-2xl">sending Your Email...</h1>
      </template>
      <template v-slot:done_text>
        <h1 class="text-black font-lg text-center text-2xl">Thank You For Reaching Out.</h1>
      </template>
    </emailAnimation>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import emailAnimation from "~/components/emailAnimation.vue";

export default Vue.extend({
  components: {
    emailAnimation
  },
  data() {
    return {
      contact: {
        mail: "",
        phone: "",
        name: "",
        body: ""
      },
      email_state: "not-active"
    };
  },
  computed: {
    Email_state():string {
      return this.email_state;
    }
  },
  methods: {
    async handleSubmit() {
      const contact = this.contact;
      this.email_state = "loading";
      await this.send_mail(contact);
      console.log(contact);
      this.contact = {
        mail: "",
        phone: "",
        name: "",
        body: ""
      };
    },
    async send_mail(body: {
      name: string;
      mail: string;
      phone: string;
      body: string;
    }) {
      const url = process.env.BASE_URL + "/users/lermanori/contact";
      this.email_state = "loading";
      const res = await (this as unknown as {$axios:any}).$axios.post(url, body);
      this.email_state = "done";
    }
  }
});
</script>

<style scoped>
</style>
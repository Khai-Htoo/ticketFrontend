<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref } from "vue";
import { handleAuth } from "@/api/auth";
const email = ref();
const password = ref();
const { auth, errors } = handleAuth();

const handleSubmit = async () => {
  const formData = {
    email: email.value,
    password: password.value,
  };
  auth("login", formData);
};
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="">
        <label>Email</label> <br />
        <InputText
          type="email"
          class="mt-3 w-full"
          v-model="email"
          placeholder="Enter your name..."
        />
        <strong class="text-red-500" v-if="errors?.email[0]">{{
          errors?.email[0]
        }}</strong>
      </div>
      <div class="my-4">
        <label>Password</label> <br />
        <InputText
          type="password"
          class="mt-3 w-full"
          v-model="password"
          placeholder="Enter your password..."
        />
        <strong class="text-red-500" v-if="errors?.password">{{
          errors?.password[0]
        }}</strong>
      </div>
      <Button label="Submit" type="submit" />
    </form>
  </div>
</template>

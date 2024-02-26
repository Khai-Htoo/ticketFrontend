<script setup>
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import { ref } from "vue";
import { handleAuth } from "@/api/auth";
const name = ref();
const email = ref();
const password = ref();
const password_confirmation = ref();
const { auth, errors } = handleAuth();
const handleSubmit = () => {
  const formData = {
    name: name.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
  };
  auth("register", formData);
};
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="">
        <label>Name</label> <br />
        <InputText
          type="text"
          class="mt-3 w-full"
          v-model="name"
          placeholder="Enter your name..."
        />
        <strong class="text-red-500" v-if="errors?.name">{{
          errors?.name[0]
        }}</strong>
      </div>
      <div class="my-4">
        <label>Email</label> <br />
        <InputText
          type="email"
          class="mt-3 w-full"
          v-model="email"
          placeholder="Enter your email..."
        />
        <strong class="text-red-500" v-if="errors?.email">{{
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
      <div class="my-4">
        <label>Password Confirmation</label> <br />
        <InputText
          type="password"
          class="mt-3 w-full"
          v-model="password_confirmation"
          placeholder="Enter your password..."
        />
        <strong class="text-red-500" v-if="errors?.password_confirmation">{{
          errors?.password_confirmation[0]
        }}</strong>
      </div>
      <Button label="Submit" type="submit" />
    </form>
  </div>
</template>

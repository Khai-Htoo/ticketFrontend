<script setup>
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import RegisterForm from "../../components/Auth/RegisterForm.vue";
import { ref } from "vue";
const visible = ref(false);
</script>
<template>
  <Button
    label="SignUp"
    icon="pi pi-external-link"
    @click="visible = true"
    class="dark:bg-opacity-15 dark:bg-white border-2 dark:hover:bg-yellow-400 dark:border-yellow-400 md:mx-9 sm:mx-2 md:text-[30px]"
  />

  <Dialog
    v-model:visible="visible"
    modal
    header="SignUp Your Account"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <RegisterForm />
  </Dialog>
</template>

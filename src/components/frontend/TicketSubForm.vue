<script setup>
import { onMounted, ref } from "vue";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import Calendar from "primevue/calendar";
import InputText from "primevue/inputtext";
import axios from "axios";
import { GetData } from "@/api/GetData";
import router from "@/router";
const user = ref();
const name = ref();
const nrcNumber = ref();
const category_id = ref();
const priority = ref();
const date = ref();
const description = ref();
const phone = ref();
const priorities = ref(["Normal", "Vip"]);
const { data, fetchData } = GetData();
const emit = defineEmits(["close"]);
const errors = ref();

// fetch auth user
const fetchUser = async () => {
  const res = await axios.get("/api/user");
  user.value = res.data;
};

// submit ticket form
const handleSubmit = async () => {
  const data = {
    user_id: user.value.id,
    name: name.value,
    nrc_number: nrcNumber.value,
    phone: phone.value,
    category_id: category_id.value?.id,
    description: description.value,
    priority: priority.value,
    date: date.value,
  };
  try {
    const res = await axios.post("api/ticket", data);
    if (res.status == 200) {
      emit("close");
      router.push({ name: "TicketDetail", params: { id: res.data.data.id } });
    }
  } catch (error) {
    errors.value = error.response.data.errors;
  }
};
onMounted(() => {
  fetchData("api/category");
  fetchUser();
});
</script>
<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <div class="space-y-3">
        <!-- Name -->
        <div>
          <label class="">Name</label> <br />
          <InputText
            type="text"
            v-model="name"
            placeholder="Enter Name... "
            class="w-full"
          />
          <strong v-if="errors?.name" class="text-red-500">{{
            errors.name[0]
          }}</strong>
        </div>
        <!-- Nrc -->
        <div>
          <label class="">NRC Number</label> <br />
          <InputText
            type="text"
            v-model="nrcNumber"
            placeholder="Enter NRC Number... "
            class="w-full"
          />
          <strong v-if="errors?.nrc_number" class="text-red-500">{{
            errors.nrc_number[0]
          }}</strong>
        </div>
        <!-- image -->
        <!-- Phone -->
        <div>
          <label class="">Phone Number</label> <br />
          <InputText
            type="number"
            v-model="phone"
            placeholder="Enter Phone Number... "
            class="w-full"
          />
          <strong v-if="errors?.phone" class="text-red-500">{{
            errors.phone[0]
          }}</strong>
        </div>
        <!-- category -->
        <div v-if="data">
          <label class="">Category</label> <br />
          <Dropdown
            v-model="category_id"
            :options="data"
            optionLabel="name"
            placeholder="Select a Journey"
            class="w-full mt-2"
          />
          <strong v-if="errors?.category_id" class="text-red-500">{{
            errors.category_id[0]
          }}</strong>
        </div>
        <!-- description -->
        <div>
          <label class="">Description</label>
          <Textarea
            v-model="description"
            autoResize
            rows="5"
            cols="30"
            class="mt-3 w-full"
            placeholder="Write description..."
          />
          <strong v-if="errors?.description" class="text-red-500">{{
            errors.description[0]
          }}</strong>
        </div>
        <!-- priority -->
        <div>
          <label class="">Priority</label> <br />
          <Dropdown
            v-model="priority"
            :options="priorities"
            placeholder="Select Priority"
            class="w-full mt-3"
          />
          <strong v-if="errors?.priority" class="text-red-500">{{
            errors.priority[0]
          }}</strong>
        </div>
        <!-- date -->
        <div>
          <label class="">Date</label> <br />
          <input
            v-model="date"
            type="date"
            class="w-full dark:bg-slate-900 rounded-lg p-2 border border-slate-700"
          />
          <strong v-if="errors?.date" class="text-red-500">{{
            errors.date[0]
          }}</strong>
        </div>
        <!-- button -->
        <div class="">
          <Button label="Submit" type="submit" />
        </div>
      </div>
    </form>
  </div>
</template>

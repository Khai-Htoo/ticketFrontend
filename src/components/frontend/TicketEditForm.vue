<script setup>
import { onMounted, ref } from "vue";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import axios from "axios";
const props = defineProps(["ticket", "data"]);
const user = ref();
const errors = ref();
const name = ref(props.ticket.name);
const nrcNumber = ref(props.ticket.nrc_number);
const priority = ref(props.ticket.priority);
const date = ref(props.ticket.date);
const description = ref(props.ticket.description);
const phone = ref(props.ticket.phone);
const priorities = ref(["Normal", "Vip"]);
const category_id = ref(
  props.data.find((d) => d.id == props.ticket.category_id)
);
const emit = defineEmits();
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
    category_id: category_id.value.id,
    description: description.value,
    priority: priority.value,
    date: date.value,
  };
  try {
    const res = await axios.patch(`api/ticket/${props.ticket.id}`, data);
    if (res.status == 200) {
      emit("close");
      emit("updateTicket");
    }
  } catch (error) {
    errors.value = error.response.data.errors;
  }
};
onMounted(() => {
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
        </div>
        <!-- Phone -->
        <div>
          <label class="">Phone Number</label> <br />
          <InputText
            type="number"
            v-model="phone"
            placeholder="Enter Phone Number... "
            class="w-full"
          />
        </div>
        <!-- category -->
        <div v-if="props.data">
          <label class="">Category</label> <br />
          <Dropdown
            v-model="category_id"
            :options="props.data"
            optionLabel="name"
            placeholder="Select a Journey"
            class="w-full mt-2"
          />
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
        </div>
        <!-- date -->
        <div>
          <label class="">Date</label> <br />
          <input
            v-model="date"
            type="date"
            class="w-full dark:bg-slate-900 rounded-lg p-2 border border-slate-700"
          />
        </div>
        <!-- button -->
        <div class="">
          <Button label="Submit" type="submit" />
        </div>
      </div>
    </form>
  </div>
</template>

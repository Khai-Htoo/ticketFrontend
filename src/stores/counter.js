import { ref, computed } from "vue";
import { defineStore } from "pinia";
export const useCounterStore = defineStore("counterStore", {
  state: () => {
    return {
      ticketFormModal: false,
    };
  },
  getters: {},
  actions: {},
});

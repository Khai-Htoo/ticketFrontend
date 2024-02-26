import axios from "axios";
import router from "@/router";
import { ref } from "vue";

export const handleAuth = () => {
  const errors = ref();
  const auth = async (url, data) => {
    await axios.get("sanctum/csrf-cookie");
    try {
      const res = await axios.post(url, data);
      if (res) {
        const res = await axios.get("api/user");
        localStorage.setItem("auth", JSON.stringify(res.data));
        res.data.role == "user"
          ? router.push({ name: "MyTicketList" })
          : router.push({ name: "admin" });
      }
    } catch (error) {
      errors.value = error.response.data.errors;
      console.log(error.response.data.errors);
    }
  };
  return { auth, errors };
};

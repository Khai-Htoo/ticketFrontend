import axios from "axios";
import { ref } from "vue";

export const GetData = () => {
  const data = ref();
  const fetchData = async (url) => {
    const res = await axios.get(url);
    data.value = res.data.data;
  };
  return { data, fetchData };
};

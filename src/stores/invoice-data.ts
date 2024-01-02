import { defineStore } from "pinia";
import { useFetch } from "@vueuse/core";
import { ref, watch } from "vue";

export const useInvoiceStore = defineStore("invoice", () => {
  const { isFetching, error, data } = useFetch("data.json");
  const invoices = ref();

  watch(data, () => {
    // @ts-ignore TODO: fix this when you start using your API
    if (data.value) invoices.value = JSON.parse(data.value);
  });

  return {
    invoices,
    isFetching,
    error,
  };
});

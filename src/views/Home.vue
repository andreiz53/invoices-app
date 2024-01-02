<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useInvoiceStore } from "../stores/invoice-data.ts";
import { watch } from "vue";
import InvoiceListItem from "../components/InvoiceListItem.vue";

const { isFetching: isLoading, error: isError, invoices } = storeToRefs(useInvoiceStore());

watch(
  invoices,
  () => {
    console.log(invoices.value);
  },
  { immediate: true }
);
</script>

<template>
  <div v-if="isLoading">Loading data...</div>
  <div v-else-if="isError">Something occured... error</div>
  <div v-else-if="invoices" class="min-h-screen p-8 bg-purple-100/50">
    <div class="mb-16">
      <!-- page-header -->
      <div class="flex items-center justify-between">
        <div class="column">
          <h1 class="font-bold text-3xl">Invoices</h1>
          <p>There are X total invoices</p>
        </div>
        <div class="flex items-center gap-2">
          <select name="" id="">
            <option value="status">Filter by status</option>
            <option value="amount">Filter by amount</option>
            <option value="date">Filter by date</option>
          </select>
          <button class="bg-purple-700 px-4 py-4 rounded-full text-white font-bold">New Invoice</button>
        </div>
      </div>
    </div>
    <!-- end page header -->
    <!-- invoices list -->
    <div class="grid gap-2">
      <!-- invoice item -->
      <div
        class="bg-white grid items-center grid-cols-[1fr_1.14fr_1.42fr_0.7fr_1.28fr] gap-4 justify-between px-8 py-4 rounded-md"
        v-for="invoice in invoices"
        :v-key="invoice.id">
        <InvoiceListItem :data="invoice" />
      </div>
      <!-- end invoice item -->
    </div>
    <!-- end invoices list -->
  </div>
</template>

<style scoped></style>

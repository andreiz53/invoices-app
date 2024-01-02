<script setup lang="ts">
const props = defineProps<{
  data: any;
}>();
</script>

<template>
  <div class="font-bold text-base tracking-tighter text-neutral">
    #<span class="text-neutral-darker">{{ props.data.id }}</span>
  </div>
  <div class="text-sm tracking-tight text-neutral-dark font-medium">Due {{ props.data.paymentDue }}</div>
  <div class="text-sm tracking-tight text-neutral-dark font-medium">{{ props.data.clientName }}</div>
  <div class="text-right text-neutral-darker font-bold tracking-tighter">${{ props.data.total.toFixed(2) }}</div>
  <div
    class="text-center font-bold tracking-tighter capitalize px-8 py-3 rounded-md flex items-center gap-2 justify-center"
    :class="props.data.status">
    {{ props.data.status }}
  </div>
</template>

<style scoped>
.paid {
  @apply text-[#33D69F] bg-[#33D69F]/5 before:bg-[#33D69F];
}
.pending {
  @apply text-[#FF8F00] bg-[#FF8F00]/5 before:bg-[#FF8F00];
}
.draft {
  @apply text-[#373B53] bg-[#373B53]/5 before:bg-[#373B53];
}
.paid::before,
.pending::before,
.draft::before {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 100%;
}
</style>

<template>
  <button v-if="!toggleNew" type="button" class="rounded-full | text-white | bg-indigo-600 p-2 hover:bg-indigo-500"
    @click="toggleNew = true">
    <plus-icon class="h-8 w-8" aria-hidden="true" />
  </button>
  <div v-else
    class="h-[66px] w-[40rem] | bg-indigo-950 | rounded-full | flex justify-start items-center animate-slide-in">
    <div class="flex justify-start | bg-indigo-600 | h-[66px] | rounded-l-full | pl-3"
      :class="toggleNextStep ? 'w-[9.25rem]' : 'w-[10.25rem]'">
      <!-- Close btn + Step -->
      <button class="bg-indigo-900 | rounded-full | h-10 w-[2.5rem] mt-3 | text-white" type="button" @click="close">
        <x-mark-icon aria-hidden="true" />
      </button>
      <div class="text-white | flex justify-start items-center | relative | ml-1">
        {{ toggleNextStep ? 'PRIORITY' : 'TASK NAME' }}
        <span class="absolute | ml-2 pl-2 | h-6 w-6 | rounded-full | bg-indigo-900"
          :class="toggleNextStep ? 'left-[4rem]' : 'left-[5.5rem]'">{{ toggleNextStep ? '2' : '1' }}</span>
      </div>
    </div>
    <div class="h-[66px]" :class="toggleNextStep ? 'w-[27.5rem]' : 'w-[26rem]'">
      <div v-if="!toggleNextStep" class="pl-4 grid content-between gap-[2px]">
        <!-- Input - STEP 1 -->
        <text-input />
      </div>
      <div v-else class="pl-4 | h-full | grid content-center | animate-slide-in">
        <!-- Input - STEP 2 -->
        <div class="flex justify-start items-center">
          <status-selector class="w-[11rem]" />
          <date-time-selector />
        </div>
      </div>
    </div>
    <div class="flex justify-start | h-[66px] | ml-1">
      <div v-if="toggleNextStep" class="flex justify-start items-center">
        <chevron-left-icon aria-hidden="true" class="ml-1 | h-6 w-6 | rounded-full | bg-indigo-900 | text-white"
          @click="toggleNextStep = !toggleNextStep" />
        <!-- Next/Add step btn -->
        <button class="bg-white | rounded-full | h-10 w-[2.5rem] mr-3 | text-indigo-900" type="button"
          @click="taskStore.$reset()">
          <plus-icon aria-hidden="true" />
        </button>
      </div>
      <button v-else class="bg-white | rounded-full | h-10 w-[2.5rem] mt-3 ml-1 | text-indigo-900" type="button"
        @click="toggleNextStep = !toggleNextStep">
        <chevron-right-icon aria-hidden="true" />
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '../stores/TaskStore';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon, XMarkIcon } from '@heroicons/vue/20/solid'
import StatusSelector from './inputs/StatusSelector.vue'
import TextInput from './inputs/TextInput.vue'
import DateTimeSelector from './inputs/DateTimeSelector.vue'

const taskStore = useTasksStore()

const toggleNew = ref(false);
const toggleNextStep = ref(false);

const close = () => {
  toggleNew.value = false
  toggleNextStep.value = false
}
</script>
<style scoped>
.animate-slide-in {
  opacity: 0;
  animation: slide-in 0.3s ease-in-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
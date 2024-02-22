<template>
  <div class="relative h-[2rem]">
    <input v-model="taskStore.currentTask.name" type="text" name="name" id="name"
      class="w-full | rounded-t-2xl border-0| px-4 py-1.5 | text-white  placeholder:text-white text-sm | bg-indigo-600 | focus:bg-indigo-400 outline-indigo-400"
      placeholder="Add a task name!" />
    <div v-if="taskStore.currentTask.name" class="absolute inset-y-0 right-0 | flex items-center | pr-3 | cursor-pointer"
      @click="taskStore.currentTask.name = ''">
      <x-mark-icon class="h-5 w-5 | text-white" aria-hidden="true" />
    </div>
  </div>
  <div class="relative | h-[2rem]">
    <input v-model="taskStore.currentTask.description" type="text" name="name" id="name"
      class="w-full | rounded-b-2xl border-0| px-4 py-1.5 | text-white  placeholder:text-white text-sm | bg-indigo-600 | focus:bg-indigo-400 outline-indigo-400"
      placeholder="Add a description for this task" />
    <div v-if="taskStore.currentTask.description" class="absolute inset-y-0 right-0 | flex items-center | pr-3 | cursor-pointer"
      @click="taskStore.currentTask.description = ''">
      <x-mark-icon class="h-5 w-5 | text-white" aria-hidden="true" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/20/solid'
import { useTasksStore } from '../../stores/TaskStore';

const taskStore = useTasksStore()
</script>
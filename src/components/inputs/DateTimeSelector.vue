<template>
  <div class="relative | text-white">
    <input 
    :value="taskStore.currentTask.deadline" 
    type="datetime-local" 
    min="2018-06-07T00:00"
    class="rounded-2xl border-0| px-4 py-1.5 ml-1 | text-sm | bg-indigo-600 | focus:bg-indigo-600 outline-indigo-40" />
    <div class="bg-indigo-600 | h-5 w-5 | absolute right-4 top-1 | pointer-events-none" />
    <calendar-icon class="h-5 w-5 absolute right-4 top-1.5 | pointer-events-none" aria-hidden="true" />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useTasksStore } from '../../stores/TaskStore';
import { CalendarIcon } from '@heroicons/vue/20/solid'

const meetingTime = ref('2024-02-12T19:30')
const taskStore = useTasksStore()
</script>
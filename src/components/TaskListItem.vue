<template>
  <div
    :class="`bg-${task.priority} | h-full w-9 | flex items-center | rounded-l-full | pl-2 | border-r-${task.priority}`">
    <check-circle-icon aria-hidden="true" :class="`w-5 h-5 | ${task.done ? 'low' : 'none'}`" />
  </div>
  <div class="bg-slate-600 | h-full w-[40rem] | flex items-center | pl-2 | rounded-r-full">
    <div class="text-white text-sm">{{ task.name }}
      <div class="">
        <span 
          v-if="task.priority != 'none'" 
          :class="[isOverdue ? 'high' : `${task.priority}`, 'mr-2']"
        >
          {{ remainingTime() }}
        </span>
        <span class="text-gray-400">{{ task.description }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { differenceInMinutes } from 'date-fns';
import { CheckCircleIcon } from '@heroicons/vue/20/solid'
import { Task } from "../models/Task";
import { useOverdueLogic } from '../composables/useOverdueLogic'

const props = defineProps<{
  task: Task
}>()

const { isOverdue } = useOverdueLogic(props.task)

const remainingTime = () => {
  const currentTime = new Date();
  const timeDiff = differenceInMinutes(props.task.deadline, currentTime);

  if (timeDiff <= 0) {
    return "Overdue in: 0d 0h 0m"
  }

  if (timeDiff <= 60) {
    return `Overdue in: 0d 0h ${Math.floor(timeDiff % 60)}m`
  }

  const days = Math.floor(timeDiff / (24 * 60))
  const hours = Math.floor((timeDiff % (24 * 60)) / 60)
  const minutes = Math.floor(timeDiff % 60)

  return `Deadline: ${days}d ${hours}h ${minutes}m`
}
</script>
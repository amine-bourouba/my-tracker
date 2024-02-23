<template>
  <div class="flex items-center justify-start | rounded-full">
    <button class="w-20 h-8 bg-slate-400 | rounded-full" @click="taskStore.toggleToDoTasks = true">
      To do: ({{ taskStore.toDoTasksCount }})
    </button>
    <button class="w-20 h-8 bg-slate-400 | rounded-full" @click="taskStore.toggleToDoTasks = false">
      Done: ({{ taskStore.doneTasksCount }})
    </button>
  </div>
  <div class="px-4">
    <!-- OVERDUE TASKS -->

    <div v-if="overdueTasks.length">
      <div class="ml-2 mb-1 | text-white text-sm">Overdue tasks:</div>
      <div class="bg-red-500 | h-0.5 w-full | mb-3" />
      <div v-for="(task, index) in overdueTasks" :key="index">
        <div class="mb-2 | h-12 w-full | flex">
          <task-list-item :task="task" />
        </div>
      </div>
    </div>

    <!-- PRIORITY TASKS -->

    <div v-if="priorityTasks.length">
      <div class="ml-2 mb-1 | text-white text-sm">Priority tasks to do:</div>
      <div class="bg-gray-500 | h-0.5 w-full | mb-3" />
      <div v-for="(task, index) in priorityTasks" :key="index">
        <div class="mb-2 | h-12 w-full | flex">
          <task-list-item :task="task" />
        </div>
      </div>
    </div>

    <!-- NO PRIORITY TASKS -->

    <div v-if="noPriorityTasks.length">
      <div class="ml-2 mb-1 | text-white text-sm">Tasks to do:</div>
      <div class="bg-gray-500 | h-0.5 w-full | mb-3" />
      <div v-for="(task, index) in noPriorityTasks" :key="index">
        <div class="mb-2 | h-12 w-full | flex">
          <task-list-item :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TaskListItem from './TaskListItem.vue'
import { useTasksStore } from '../stores/TaskStore';
import { useOverdueLogic } from '../composables/useOverdueLogic'

const taskStore = useTasksStore()

const isDoneTaskToggled = (task) => {
  return taskStore.toggleToDoTasks ? task.done !== true : task.done !== false
}

const overdueTasks = computed(() => {
  return taskStore.tasks.filter(task => {
    const { isOverdue } = useOverdueLogic(task)
    return isOverdue.value && task.priority !== 'none'
    && isDoneTaskToggled(task)
  })
})

const noPriorityTasks = computed(() => {
  return taskStore.tasks.filter(task => task.priority === 'none'
    && isDoneTaskToggled(task)
  )
})

const priorityTasks = computed(() => {
  return taskStore.tasks.filter(task => {
    const { isOverdue } = useOverdueLogic(task)
    return !isOverdue.value && task.priority !== 'none'
    && isDoneTaskToggled(task)
  })
})

</script>
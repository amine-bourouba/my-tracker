<template>
  <div class="w-[45rem] min-h-[45rem] | border-solid border-2 rounded-2xl | relative | grid justify-items-center">
    <div class="absolute top-0">
      <task-list />
    </div>
    <div class="absolute bottom-0 pb-8">
      <task-editor />
    </div>
  </div>
</template>
<script setup>
import TaskEditor from './TaskEditor.vue'
import TaskList from './TaskList.vue'
</script>
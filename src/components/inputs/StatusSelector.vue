<template>
  <Listbox as="div" v-model="selected">
    <!-- SELECTED ITEM -->
    <ListboxButton
      class="w-full | rounded-2xl border-0| px-4 py-1.5 | text-white text-sm | bg-indigo-600 | focus:bg-indigo-600 outline-indigo-40">
      <span class="flex items-center">
        <BookmarkIcon :class="`h-5 w-5 | mr-1 | ${selected.priority}`" aria-hidden="true" />
        <span class="block">priority: {{ selected.name }}</span>
      </span>
      <span class="cursor-pointer absolute inset-y-0 left-40 flex items-center pl-1">
        <ChevronUpDownIcon class="h-5 w-5 text-white" aria-hidden="true" />
      </span>
    </ListboxButton>

    <!-- OPTIONS -->
    <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100"
      leave-to-class="opacity-0">
      <ListboxOptions
        class="absolute z-10 overflow-auto| mt-1 | max-h-60 w-[26.5rem] |  rounded-2xl | bg-indigo-900 | shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none | text-sm">
        <ListboxOption as="template" v-for="(status, index) in statuses" :key="index" :value="status"
          v-slot="{ active, selected }">
          <li :class="{
            'bg-indigo-600': active,
            'bg-indigo-400': selected,
            'w-[26.5rem] | relative select-none | py-1 pl-3 pr-9 | rounded-2xl | text-white': true
          }">
            <div class="flex items-center">
              <span :class="status.priority">
                <BookmarkIcon :class="`h-5 w-5 | mr-1 | `" aria-hidden="true" />
              </span>
              {{ status.name }}
            </div>

            <span v-if="selected" class="text-white | absolute inset-y-0 right-0 | flex items-center | pr-4">
              <CheckIcon class="h-5 w-5" aria-hidden="true" />
            </span>
          </li>
        </ListboxOption>
      </ListboxOptions>
    </transition>
  </Listbox>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon, BookmarkIcon } from '@heroicons/vue/20/solid'
import { useTasksStore } from '../../stores/TaskStore';

const taskStore = useTasksStore()

const statuses = [
  { name: 'None', priority: 'neutral' },
  { name: 'High', priority: 'low' },
  { name: 'Medium', priority: 'medium' },
  { name: 'Low', priority: 'high' },
]
const selected = ref(statuses[0])

watch(selected, (newVal, oldVal) => {
  taskStore.currentTask.priority = newVal.priority
})

</script>
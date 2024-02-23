import { defineStore } from 'pinia'
import { format } from 'date-fns';
import { Task } from "../models/Task";

export const useTasksStore = defineStore('tasks', {
  state: () => {
    const dateTimeObject = new Date(); // Create a new DateTime object with the current date and time
    const formattedDateTime = format(dateTimeObject, "yyyy-MM-dd'T'HH:mm");
    return {
      toggleToDoTasks: true,
      currentTask: {
        name: "",
        description: "",
        priority: "",
        deadline: formattedDateTime,
        done: false
      } as Task,
      tasks: [
        {
          name: "test task",
          description: "neeko punchieee",
          priority: "high",
          done: false,
          deadline: formattedDateTime
        },
        {
          name: "task 2",
          description: "GLHF, good luck human fleshbag",
          priority: "low",
          done: false,
          deadline: formattedDateTime
        },
        {
          name: "task 3",
          description: "ggwp",
          priority: "none",
          done: true,
          deadline: "2024-02-22T11:13"
        },
        {
          name: "task 4",
          description: "chop swey",
          priority: "medium",
          done: false,
          deadline: "2024-02-22T12:13"
        },
        {
          name: "task 5",
          description: "get it done",
          priority: "medium",
          done: false,
          deadline: "2024-02-28T11:13"
        },
      ] as Task[],
    }
  },
  getters: {
    doneTasksCount(state): number {
      return state.tasks.filter(task => task.done === true).length
    },
    toDoTasksCount(state): number {
      return state.tasks.filter(task => task.done === false).length
    }
  },
  actions: {
    addTask() {
      this.tasks.push(this.currentTask)
      localStorage.setItem('tasks', this.tasks)
    }
  },
})

import { defineStore } from 'pinia'
import { format } from 'date-fns';


export const useTasksStore = defineStore('tasks', {
  state: () => {
    const dateTimeObject = new Date(); // Create a new DateTime object with the current date and time
    const formattedDateTime = format(dateTimeObject, "yyyy-MM-dd'T'HH:mm");
    return {
      currentTask: {
        name: "",
        description: "",
        priority: "",
        deadline: formattedDateTime,
      } as Task,
      tasks: [
        {
          name: "test task",
          description: "neeko punchieee",
          priority: "high",
          deadline: formattedDateTime
        },
        {
          name: "task 2",
          description: "GLHF, good luck human fleshbag",
          priority: "low",
          deadline: formattedDateTime
        },
        {
          name: "task 3",
          description: "ggwp",
          priority: "none",
          deadline: "2024-02-22T11:13"
        },
        {
          name: "task 4",
          description: "chop swey",
          priority: "medium",
          deadline: "2024-02-22T12:13"
        },
        {
          name: "task 5",
          description: "get it done",
          priority: "medium",
          deadline: "2024-02-28T11:13"
        },
      ] as Task[],
    }
  },
  getters: {
  },
  actions: {
  },
})

interface Task {
  name: string
  description: string
  priority: string
  deadline: string
}
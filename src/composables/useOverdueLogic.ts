import { ref } from 'vue'
import { differenceInMinutes } from 'date-fns';

export function useOverdueLogic(task) {
  const isOverdue = ref(false)
  const currentTime = new Date();
  
  isOverdue.value = differenceInMinutes(task.deadline, currentTime) <= 60;

  return { isOverdue }
}
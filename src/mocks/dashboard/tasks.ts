import { fakerRU } from '@faker-js/faker'

export interface Task {
  id: string
  title: string
  status: 'todo' | 'in_progress' | 'done'
  priority: 'low' | 'medium' | 'high'
  dueDate: Date
  assignedTo: string
}

export const generateTasks = (min: number = 3, max: number = 9): Task[] => {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  
  return Array.from({ length: count }, () => ({
    id: fakerRU.string.uuid(),
    title: fakerRU.lorem.words(3),
    status: fakerRU.helpers.arrayElement(['todo', 'in_progress', 'done']),
    priority: fakerRU.helpers.arrayElement(['low', 'medium', 'high']),
    dueDate: fakerRU.date.soon({ days: 30 }),
    assignedTo: fakerRU.person.fullName(),
  }));
}

export const mockTasks = generateTasks();
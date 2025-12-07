import { fakerRU } from '@faker-js/faker'

export interface Course {
  id: string
  title: string
  progress: number
  modules: number
  completedModules: number
}

export const generateCourse = (): Course => {
  const modules = fakerRU.number.int({ min: 5, max: 15 })
  const progress = fakerRU.number.int({ min: 0, max: 100 })
  
  const completedModules = Math.round((progress / 100) * modules)
  
  return {
    id: fakerRU.string.uuid(),
    title: fakerRU.lorem.words(2),
    progress,
    modules,
    completedModules,
  }
}

export const mockCourses = [generateCourse()]
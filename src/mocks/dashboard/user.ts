import { fakerRU } from '@faker-js/faker'

export interface User {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  avatar: string
  position: string
  department: string
  notifications: number
}

export const generateUser = (): User => {
  const firstName = fakerRU.person.firstName()
  const lastName = fakerRU.person.lastName()
  
  return {
    id: fakerRU.string.uuid(),
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`,
    email: fakerRU.internet.email({ firstName, lastName }),
    avatar: fakerRU.image.avatar(),
    position: fakerRU.person.jobTitle(),
    department: fakerRU.commerce.department(),
    notifications: fakerRU.number.int({ min: 0, max: 10 }),
  }
}

export const mockUser = generateUser()
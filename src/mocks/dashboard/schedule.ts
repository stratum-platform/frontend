import { fakerRU } from '@faker-js/faker'

export interface Shift {
  id: string
  date: Date
  dayName: string
  type: 'day' | 'night' | 'day off'
  shiftTime: string
}

export const generateSchedule = (): Shift[] => {
  const today = new Date()
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const dayAfterTomorrow = new Date()
  dayAfterTomorrow.setDate(dayAfterTomorrow.getDate() + 2)
  
  const days = [
    { date: today, dayName: 'Сегодня' },
    { date: tomorrow, dayName: 'Завтра' },
    { date: dayAfterTomorrow, dayName: 'Послезавтра' }
  ]
  
  return days.map(day => {
    const type = fakerRU.helpers.arrayElement(['day', 'night', 'day off']) as 'day' | 'night' | 'day off'
    
    let shiftTime = ''
    if (type === 'day') {
      shiftTime = '09:00 - 18:00'
    } else if (type === 'night') {
      shiftTime = '14:00 - 23:00'
    } else {
      shiftTime = 'Выходной'
    }
    
    return {
      id: fakerRU.string.uuid(),
      date: day.date,
      dayName: day.dayName,
      type,
      shiftTime
    }
  })
}

export const mockSchedule = generateSchedule()
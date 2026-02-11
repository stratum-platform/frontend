export interface Service {
    id: string
    title: string
    description: string
    backgroundColor: string
    icon: string
    active: boolean
  }
  
  export const services: Service[] = [
    {
      id: '1',
      title: 'База знаний',
      description: 'Хранилище информации',
      backgroundColor: '#3b82f6',
      icon: '📚',
      active: true,
    },
    {
      id: '2',
      title: 'Опросы и оценки',
      description: 'Анонимные опросы',
      backgroundColor: '#ef4444',
      icon: '📊',
      active: false,
    }
  ]
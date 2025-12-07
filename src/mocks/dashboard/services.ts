export interface Service {
    id: string
    title: string
    description: string
    iconColor: string
  }
  
  export const services: Service[] = [
    {
      id: '1',
      title: 'База знаний',
      description: 'Централизованное хранилище информации для решения рабочих задач',
      iconColor: 'bg-blue-500',
    },
    {
      id: '2',
      title: 'Сервис обучения',
      description: 'Система управления обучением с курсами и тестами',
      iconColor: 'bg-green-500',
    },
    {
      id: '3',
      title: 'Задачи и поручения',
      description: 'Управление проектами и задачами для руководящего состава',
      iconColor: 'bg-red-500',
    },
    {
      id: '4',
      title: 'Опросы и оценки',
      description: 'Проведение анонимных и именных опросов',
      iconColor: 'bg-yellow-500',
    },
    {
      id: '5',
      title: 'Уведомления',
      description: 'Единый центр для рассылки уведомлений',
      iconColor: 'bg-purple-500',
    },
    {
      id: '6',
      title: 'Чат-бот',
      description: 'Обработка запросов пользователей в естественном языке',
      iconColor: 'bg-blue-900',
    },
    {
      id: '7',
      title: 'Кадровый документооборот',
      description: 'Планирование встреч и корпоративных мероприятий',
      iconColor: 'bg-black',
    },
    {
      id: '8',
      title: 'Интеграции',
      description: 'Единая точка для взаимодействия с внешними системами',
      iconColor: 'bg-gray-500',
    },
  ]
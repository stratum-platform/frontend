export function Sidebar() {
  const menuItems = [
    { label: 'Начальная страница', active: true, code: 'main'},
    { label: 'Календарь', active: false, code: 'calendar'},
    { label: 'База знаний', active: false, code: 'library' },
    { label: 'Обучение', active: false, code: 'courses' },
    { label: 'Задачи и поручения', active: false, code: 'tasks' },
    { label: 'Опросы и оценки', active: false, code: 'rating' },
    { label: 'Уведомления', active: false, code: 'notifications' },
    { label: 'Чат-бот', active: false, code: 'chat' },
    { label: 'Кадровый документооборот', active: false, code: 'docs' },
    { label: 'Интеграции', active: false, code: 'integrations' },
    { label: 'Калькулятор ЗП', active: false, code: 'calculator' },
    { label: 'Личный кабинет', active: false, code: 'personal' },

  ]
    
  return (
    <aside className="bg-gradient-menu min-h-screen fixed">
      <div className="mb-8 p-4">
        <h2 className="text-2xl font-bold text-white">Corp Tools</h2>
      </div>
      
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.code}>
              <button
                className={`
                  w-full space-x-3 px-4 py-3 text-white text-left
                  ${item.active ? 'border-l-3 border-green-500 bg-blue-400' : ''}
                `}>
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      
    </aside>
  )
}
import { services } from '../../../../mocks/dashboard/services'

export function ServicesGrid() {
  return (



    <div className="services-grid">
      {services.map((service) => (

        <div className="service-card" key={service.id}>
            <div
              className="service-icon"
              style={{
                background: service.backgroundColor
              }}>
                {service.icon}
            </div>
            <h3 
              style={{
                fontSize: '1.1rem',
                marginBottom: '0.5rem'
              }}>
                {service.title}
            </h3>
            <p
              style={{
                color: 'var(--gray-500)',
                fontSize: '0.9rem',
                marginBottom: '1rem',
              }}>
                Хранилище информации
            </p>

            {service.active ? (
            <>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem' 
              }}>
                <button style={{ 
                  padding: '0.4rem 0.9rem', 
                  background: 'var(--primary)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px', 
                  fontSize: '0.8rem', 
                  cursor: 'pointer' 
                }}>
                  Подробнее
                </button>
                <button style={{ 
                  padding: '0.4rem 0.9rem', 
                  background: 'var(--accent)', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px', 
                  fontSize: '0.8rem', 
                  cursor: 'pointer' 
                }}>
                  Настроить
                </button>
              </div>
              <div className="service-status">
                <span>Активен</span>
                <label className="toggle-switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider"></span>
                </label>
              </div>
            </>
          ) : (
            <>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '0.75rem', 
                marginBottom: '1rem' 
              }}>
                <button style={{ 
                  padding: '0.4rem 0.9rem', 
                  background: '#f59e0b', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '6px', 
                  fontSize: '0.8rem', 
                  cursor: 'pointer' 
                }}>
                  Купить в биллинге →
                </button>
              </div>
              <div className="service-status">
                <span>Неактивен</span>
                <label className="toggle-switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </>
          )}

        </div>

        // <div 
        //   key={service.id}
        //   className="bg-white rounded-xl shadow p-5 hover:shadow-lg transition-shadow cursor-pointer"
        // >
        //   <div className={`${service.iconColor} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mb-4 ml-auto mr-auto`}>
        //   </div>
          
        //   <h3 className="text-lg text-center font-semibold text-gray-900 mb-2">
        //     {service.title}
        //   </h3>
          
        //   <p className="text-sm text-center text-gray-600 line-clamp-3">
        //     {service.description}
        //   </p>

        // </div>
      ))}
    </div>
  )
}
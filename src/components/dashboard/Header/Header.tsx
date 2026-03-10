import { useLocation } from 'react-router-dom'
import { mockUser } from '../../../mocks/dashboard/user'
import avatarImg from '../../../assets/img/ava.jpg';

export function Header() {

  const location = useLocation()

  const getPageTitle = (pathname: string) => {
    switch(pathname) {
      case '/':
      case '':
        return 'Начальная страница'
      case '/tasks':
        return 'Задачи'
      case '/personal':
        return 'Личный кабинет'
      case '/knowledge':
        return 'База знаний - главная'
      case '/knowledge/categories':
        return 'База знаний - поиск'
      case '/courses':
        return 'Обучение'
      case '/billing':
        return 'Счета'
      case '/settings':
        return 'Настройка платформы'
      default:
        return 'Начальная страница'
    }
  }
  
  const pageTitle = getPageTitle(location.pathname)

  return (
    <header className="header">
        <button className="menu-toggle">☰</button>
        <h1>{pageTitle}</h1>

        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem'
        }}>
            <input 
                type="search"
                placeholder="Поиск по модулям..."
                style={{
                    width: '15rem',
                    padding: '0.5rem 1rem',
                    border: '1px solid var(--gray-300)',
                    borderRadius: '6px'
                }} />

            <div style={{
                position: 'relative',
                cursor: 'pointer'
            }}>
                <span style={{ fontSize: '1.5rem' }}>🔔</span>
                {mockUser.notifications > 0 && (
                  <span style={{
                    position: 'absolute',
                    top: '-0.4rem',
                    right: '-0.4rem',
                    background: 'var(--red-500)',
                    color: 'white',
                    fontSize: '0.65rem',
                    fontWeight: 'bold',
                    padding: '0.1rem 0.4rem',
                    borderRadius: '999px'
                  }}>
                    {mockUser.notifications}
                  </span>
                )}
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                cursor: 'pointer'
            }}>
                <div style={{
                    width: '2.5rem',
                    height: '2.5rem',
                    background: '#3b82f6',
                    borderRadius: '999px',
                    color: 'white',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <div className="profile-avatar" style={{ 
                        backgroundImage: `url(${avatarImg})`
                    }}></div>
                </div>
                <div>
                    <div style={{ fontWeight: 500 }}>{mockUser.fullName}</div>
                    <div style={{
                        fontSize: '0.875rem',
                        color: 'var(--gray-500)'
                    }}>{mockUser.position}</div>
                </div>
            </div>
        </div>
    </header>
  )
}
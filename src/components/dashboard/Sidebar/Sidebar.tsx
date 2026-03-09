import { NavLink } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react';

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    // Вычисляется только один раз при монтировании
    const savedState = localStorage.getItem('sidebarState');
    return savedState === 'collapsed';
  });
  
  const [isActive, setIsActive] = useState(false);
  const sidebarRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  const toggleCollapse = () => {
    setIsCollapsed(prev => {
      const newState = !prev;
      localStorage.setItem('sidebarState', newState ? 'collapsed' : 'expanded');
      return newState;
    });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (window.innerWidth >= 1024) return;
      
      if (sidebarRef.current && 
          menuToggleRef.current && 
          !sidebarRef.current.contains(event.target as Node) && 
          !menuToggleRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const menuItems = [
    { 
      label: 'Начальная страница', 
      to: '/', 
      code: 'main',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    { 
      label: 'Личный кабинет', 
      to: '/personal', 
      code: 'personal',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    { 
      label: 'База знаний', 
      to: '/knowledge', 
      code: 'library',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/>
        </svg>
      )
    },
    { 
      label: 'Задачи', 
      to: '/tasks', 
      code: 'tasks',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      )
    },
    { 
      label: 'Счета', 
      to: '/billing', 
      code: 'billing',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="M7 15h1M7 11h1M16 15h1M16 11h1"/>
        </svg>
      )
    },
    { 
      label: 'Настройки платформы', 
      to: '/settings', 
      code: 'settings',
      svg: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      )
    },
  ]

    
  return (
    <aside id="sidebar" ref={sidebarRef} className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isActive ? 'active' : ''}`} >
        <button className="toggle-sidebar-btn" title="Свернуть/развернуть" onClick={toggleCollapse}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
        </button>

        <div className="profile-block">
            <div className="profile-avatar" style={{backgroundImage: 'url(/src/assets/img/user-avatar.jpg)' }}></div>
            <div className="nav-text logo-text">Archstone</div>
        </div>

        <nav className="mt-6">
          {menuItems.map((item) => (
            <li key={item.code}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => 
                  isActive ? 'nav-item active' : 'nav-item'
                }
              >
                {item.svg}
                <span className="nav-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </nav>
    </aside>
  )
}
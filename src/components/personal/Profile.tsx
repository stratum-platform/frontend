import { mockUser } from '../../mocks/dashboard/user'
import avatarImg from '../../assets/img/ava.jpg';

export function Profile() {
    const profileLinks = [
        { id: 1, text: 'Загрузить фото' },
        { id: 2, text: 'Удалить фото' },
        { id: 3, text: 'Сменить пароль' },
        { id: 4, text: 'Сменить e-mail' },
        { id: 5, text: 'Настройки e-mail оповещений' }
    ];

    return (
        <section className="card">
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Профиль
            </h2>
            <div style={{ display: 'flex', alignItems: 'start', gap: '2rem' }}>
                <div 
                className="profile-avatar" 
                style={{ 
                    width: '80px', 
                    height: '80px', 
                    backgroundImage: `${avatarImg}`, 
                    borderRadius: '50%' 
                }}
                ></div>
                <div style={{ flex: 1 }}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label style={{ display: 'block', fontWeight: 500, marginBottom: '0.5rem' }}>
                            Отображаемое имя
                        </label>
                        <input 
                            type="text" 
                            defaultValue={mockUser.fullName}
                            style={{
                                padding: '0.75rem',
                                border: '1px solid var(--gray-300)',
                                borderRadius: '6px'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {profileLinks.map(link => (
                            <a key={link.id} href="#" 
                            style={{ 
                                color: 'var(--primary)', 
                                textDecoration: 'none' 
                            }}>
                                {link.text}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
  }
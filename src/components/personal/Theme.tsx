import { useState } from 'react';

export function Theme() {
    const [theme, setTheme] = useState('light');

    return (
        <section className="card">
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Внешний вид системы
            </h2>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <label style={{ fontWeight: 500 }}>Выберите цветовую схему:</label>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                        onClick={() => setTheme('dark')}
                        style={{
                            width: '64px',
                            height: '48px',
                            background: '#2B3541',
                            borderRadius: '8px',
                            border: theme === 'dark' ? '4px solid var(--accent)' : 'none',
                            cursor: 'pointer'
                        }}
                        title="Темная тема"
                    />
                    
                    <button
                        onClick={() => setTheme('light')}
                        style={{
                            width: '64px',
                            height: '48px',
                            background: '#F5F8FA',
                            borderRadius: '8px',
                            border: theme === 'light' ? '4px solid var(--accent)' : 'none',
                            cursor: 'pointer'
                        }}
                        title="Светлая тема"
                    />
                </div>
            </div>
        </section>
    );
}
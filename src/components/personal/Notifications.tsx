import { useState } from 'react';

export function Notifications() {
    type NotificationItem = {
        id: number;
        name: string;
        enabled: boolean;
        sound: boolean;
        push: boolean;
    };

    const [modules, setModules] = useState<NotificationItem[]>([
        { id: 1, name: 'База знаний', enabled: true, sound: true, push: true },
        { id: 2, name: 'Задачи', enabled: true, sound: true, push: true },
    ]);

    const [chats, setChats] = useState<NotificationItem[]>([
        { id: 1, name: 'Сообщение в чате', enabled: true, sound: true, push: true },
        { id: 2, name: 'Сообщение в групповом чате', enabled: true, sound: true, push: true },
        { id: 3, name: 'Сообщение @ в групповом чате', enabled: true, sound: true, push: true },
    ]);

    const handleModuleClick = (itemId: number, field: string) => {
        setModules(prev => 
            prev.map(item => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        [field]: !item[field as keyof NotificationItem]
                    };
                }
                return item;
            })
        );
    };

    const handleChatClick = (itemId: number, field: string) => {
        setChats(prev => 
            prev.map(item => {
                if (item.id === itemId) {
                    return {
                        ...item,
                        [field]: !item[field as keyof NotificationItem]
                    };
                }
                return item;
            })
        );
    };

    const renderTable = (
        title: string, 
        items: NotificationItem[], 
        onItemClick: (id: number, field: string) => void
    ) => {
        return (
            <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
                    {title}
                </h3>

                <table style={{ borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '1px solid var(--gray-200)' }}>
                            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Событие</th>
                            <th style={{ textAlign: 'center', padding: '0.75rem' }}>Включить</th>
                            <th style={{ textAlign: 'center', padding: '0.75rem' }}>Звук</th>
                            <th style={{ textAlign: 'center', padding: '0.75rem' }}>Push</th>
                        </tr>
                    </thead>

                    <tbody>
                        {items.map(item => (
                            <tr key={item.id} style={{ borderBottom: '1px solid var(--gray-200)' }}>
                                <td style={{ padding: '0.75rem' }}>{item.name}</td>

                                <td style={{ textAlign: 'center' }}>
                                    <label className="toggle-switch">
                                        <input
                                            type="checkbox"
                                            checked={item.enabled}
                                            onChange={() => onItemClick(item.id, 'enabled')}
                                        />
                                        <span className="slider"></span>
                                    </label>
                                </td>

                                <td style={{ textAlign: 'center' }}>
                                    <input
                                        type="checkbox"
                                        checked={item.sound}
                                        onChange={() => onItemClick(item.id, 'sound')}
                                    />
                                </td>

                                <td style={{ textAlign: 'center' }}>
                                    <input
                                        type="checkbox"
                                        checked={item.push}
                                        onChange={() => onItemClick(item.id, 'push')}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <section className="card mb-6">
            <h2 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                Уведомления
            </h2>

            {renderTable("Модули", modules, handleModuleClick)}
            {renderTable("Личные и групповые чаты", chats, handleChatClick)}
        </section>
    );
}
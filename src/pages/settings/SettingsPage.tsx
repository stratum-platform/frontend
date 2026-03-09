import { useState } from 'react';
import type { ReactNode } from 'react';

import { Tabs } from '../../components/settings/tabs/Tabs';
import type { TabId } from '../../components/settings/tabs/Tabs.types';
import { Card } from '../../components/settings/cards/Card';
import { AccessCard } from '../../components/settings/cards/AccessCard';
import { SectionTitle } from '../../components/settings/sections/SectionTitle';
import { ToggleSwitch } from '../../components/settings/toggle/ToggleSwitch';
import { StatusBadge } from '../../components/settings/badge/StatusBadge';
import { SettingsTable } from '../../components/settings/table/SettingsTable';

interface Department {
  id: number;
  name: string;
  enabled: boolean;
  parentId?: number;
}

interface Module {
  id: number;
  name: string;
  status: 'active' | 'inactive' | 'warning' | 'disabled';
  version: string;
  license: string;
  expires: string;
  price: string;
  departments?: { name: string; enabled: boolean; }[];
}

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: 'active' | 'warning' | 'inactive';
}

interface SecuritySettings {
  twoFactor: boolean;
  trustedDevices: boolean;
  loginNotifications: boolean;
}

interface ApiKey {
  id: number;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
}

interface Integration {
  id: number;
  name: string;
  icon: string;
  color: string;
  description: string;
  connected: boolean;
  settings?: { tasks?: boolean; messages?: boolean; };
}

export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<TabId>('company');

  const [departments, setDepartments] = useState<Department[]>([
    { id: 1, name: 'Руководство', enabled: true },
    { id: 2, name: 'Отдел продаж', enabled: true },
    { id: 3, name: 'Маркетинг', enabled: false },
    { id: 4, name: 'Разработка', enabled: true },
    { id: 5, name: '→ Frontend команда', enabled: true, parentId: 4 },
    { id: 6, name: '→ Backend команда', enabled: false, parentId: 4 },
  ]);

  const [modules] = useState<Module[]>([
    {
      id: 1,
      name: 'База знаний',
      status: 'active',
      version: '1.4.2',
      license: 'Business',
      expires: '18 января 2027',
      price: '500 ₽ / мес',
      departments: [
        { name: 'Руководство', enabled: true },
        { name: 'Продажи', enabled: true },
        { name: 'Маркетинг', enabled: true },
        { name: 'Разработка', enabled: true },
      ]
    },
    {
      id: 2,
      name: 'Задачи и поручения',
      status: 'active',
      version: '2.1.0',
      license: 'Business',
      expires: '18 января 2027',
      price: '750 ₽ / мес',
      departments: [
        { name: 'Руководство', enabled: true },
        { name: 'Продажи', enabled: true },
        { name: 'Маркетинг', enabled: false },
        { name: 'Разработка', enabled: true },
      ]
    },
    {
      id: 3,
      name: 'Опросы и оценки',
      status: 'disabled',
      version: '—',
      license: '—',
      expires: '—',
      price: '300 ₽ / мес'
    },
    {
      id: 4,
      name: 'Встроенный мессенджер',
      status: 'warning',
      version: '1.0.3 beta',
      license: 'Trial (14 дней)',
      expires: '12 февраля 2026',
      price: '420 ₽ / мес после'
    },
  ]);

  const [users] = useState<User[]>([
    { id: 1, name: 'Владислав', email: 'vlad@company.com', role: 'Владелец', lastLogin: '5 минут назад', status: 'active' },
    { id: 2, name: 'Анастасия К.', email: 'anna@company.com', role: 'HR-менеджер', lastLogin: '2 часа назад', status: 'active' },
    { id: 3, name: 'Игорь С.', email: 'igor@company.com', role: 'Разработчик', lastLogin: '3 дня назад', status: 'warning' },
  ]);

  const [securitySettings, setSecuritySettings] = useState<SecuritySettings>({
    twoFactor: true,
    trustedDevices: false,
    loginNotifications: true
  });

  const [apiKeys] = useState<ApiKey[]>([
    { id: 1, name: 'Production ключ', key: 'sk_live_51N4BcjSH2...', created: '12 окт 2025', lastUsed: '28 янв 2026' }
  ]);

  const [integrations] = useState<Integration[]>([
    { id: 1, name: 'Корпоративный мессенджер', icon: 'S', color: '#f97316', description: 'Уведомления в канал', connected: true, settings: { tasks: true, messages: false } },
    { id: 2, name: 'Google', icon: 'G', color: '#0ea5e9', description: 'Синхронизация пользователей', connected: true },
    { id: 3, name: 'Telegram', icon: 'T', color: '#8b5cf6', description: 'Бот-уведомления', connected: false },
  ]);

  const tabs = [
    { id: 'company' as const, label: 'Моя компания' },
    { id: 'modules' as const, label: 'Модули и лицензии' },
    { id: 'users' as const, label: 'Пользователи и роли' },
    { id: 'security' as const, label: 'Безопасность · API' },
    { id: 'integrations' as const, label: 'Интеграции' },
  ];

  const handleDepartmentToggle = (id: number, enabled: boolean) => {
    setDepartments(departments.map(dept =>
      dept.id === id ? { ...dept, enabled } : dept
    ));
  };

  const handleSecurityToggle = (setting: keyof SecuritySettings) => {
    setSecuritySettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const getStatusText = (status: Module['status']): string => {
    const statusMap: Record<Module['status'], string> = {
      active: 'Активен',
      inactive: 'Неактивен',
      warning: 'Пробный период',
      disabled: 'Отключён'
    };
    return statusMap[status];
  };

  const getUserStatusText = (status: User['status']): string => {
    return status === 'active' ? 'Активен' : 'Неактивен 3 дня';
  };

  const renderTabContent = (): ReactNode => {
    switch (activeTab) {
      case 'company':
        return (
          <>
            <Card className="mb-6">
              <SectionTitle>Структура компании</SectionTitle>

              <div style={{ margin: '1.5rem 0' }}>
                <div className="font-medium mb-2">Головная организация</div>
                <div style={{ padding: '0.75rem 1rem', background: 'var(--gray-50)', borderRadius: '8px', border: '1px solid var(--gray-200)' }}>
                  Archstone B.V. <span style={{ color: 'var(--gray-500)', fontSize: '0.9rem', marginLeft: '1rem' }}>(основная учётная запись)</span>
                </div>
              </div>

              <SectionTitle>Отделы и подразделения</SectionTitle>

              <div className="dept-tree">
                {departments.map(dept => (
                  <ToggleSwitch
                    key={dept.id}
                    label={dept.name}
                    checked={dept.enabled}
                    onChange={(e) => handleDepartmentToggle(dept.id, e.target.checked)}
                  />
                ))}
              </div>

              <button className="mt-4 px-4 py-2 bg-accent text-white rounded-lg text-sm font-medium">
                + Добавить отдел / подразделение
              </button>
            </Card>

            <Card>
              <SectionTitle>Доступ к модулям по отделам</SectionTitle>

              <div className="access-grid">
                {modules.filter(m => m.departments).map(module => (
                  <AccessCard
                    key={module.id}
                    moduleName={module.name}
                    status={module.status}
                    departments={module.departments}
                    onActivate={() => setActiveTab('modules')}
                  />
                ))}
              </div>
            </Card>
          </>
        );

      case 'modules':
        return (
          <Card>
            <SectionTitle>Активные модули и подписки</SectionTitle>

            <SettingsTable<Module>
              headers={['Модуль', 'Версия', 'Статус', 'Лицензия', 'До', 'Стоимость', '']}
              rows={modules}
              renderRow={(module) => (
                <tr key={module.id}>
                  <td>{module.name}</td>
                  <td>{module.version}</td>
                  <td>
                    <StatusBadge status={module.status}>
                      {getStatusText(module.status)}
                    </StatusBadge>
                  </td>
                  <td>{module.license}</td>
                  <td>{module.expires}</td>
                  <td>{module.price}</td>
                  <td>
                    {module.status === 'disabled' ? (
                      <button className="btn-small bg-yellow-100 text-yellow-800">
                        Активировать
                      </button>
                    ) : (
                      <button className="btn-small bg-accent/10 text-accent">
                        Продлить
                      </button>
                    )}
                  </td>
                </tr>
              )}
            />

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Доступные модули</h3>
              <button className="px-5 py-2.5 bg-gray-800 text-white rounded-lg text-sm font-medium">
                Перейти в магазин модулей →
              </button>
            </div>
          </Card>
        );

      case 'users':
        return (
          <Card>
            <div className="flex justify-between items-center mb-6">
              <SectionTitle style={{ margin: 0 }}>Пользователи</SectionTitle>
              <button className="px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium">
                + Пригласить пользователя
              </button>
            </div>

            <input
              type="text"
              placeholder="Поиск по имени, email, роли..."
              className="w-full max-w-lg px-4 py-2.5 border border-gray-300 rounded-lg mb-6"
            />

            <SettingsTable<User>
              headers={['Имя', 'Email', 'Роль', 'Последний вход', 'Статус', '']}
              rows={users}
              renderRow={(user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.lastLogin}</td>
                  <td>
                    <StatusBadge status={user.status}>
                      {getUserStatusText(user.status)}
                    </StatusBadge>
                  </td>
                  <td><a href="#" className="text-accent text-sm">Редактировать</a></td>
                </tr>
              )}
            />

            <div className="mt-10 pt-6 border-t">
              <h3 className="section-title" style={{ marginTop: 0 }}>Роли и разрешения</h3>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <div className="px-5 py-3 bg-gray-50 rounded-lg border border-gray-200 min-w-[220px]">
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Владелец</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>Полный доступ ко всем настройкам</div>
                </div>
                <div className="px-5 py-3 bg-gray-50 rounded-lg border border-gray-200 min-w-[220px]">
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Администратор</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>Управление пользователями, модулями</div>
                </div>
                <div className="px-5 py-3 bg-gray-50 rounded-lg border border-gray-200 min-w-[220px]">
                  <div style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Менеджер</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--gray-600)' }}>Доступ к задачам и отчётам</div>
                </div>
              </div>
              <button className="mt-6 px-5 py-2.5 bg-gray-800 text-white rounded-lg text-sm font-medium">
                + Создать новую роль
              </button>
            </div>
          </Card>
        );

      case 'security':
        return (
          <>
            <Card className="mb-6">
              <SectionTitle>Безопасность аккаунта</SectionTitle>
              <div style={{ maxWidth: '480px' }}>
                <ToggleSwitch
                  label="Двухфакторная аутентификация"
                  checked={securitySettings.twoFactor}
                  onChange={() => handleSecurityToggle('twoFactor')}
                />
                <ToggleSwitch
                  label="Вход только с доверенных устройств"
                  checked={securitySettings.trustedDevices}
                  onChange={() => handleSecurityToggle('trustedDevices')}
                />
                <ToggleSwitch
                  label="Уведомления о входе"
                  checked={securitySettings.loginNotifications}
                  onChange={() => handleSecurityToggle('loginNotifications')}
                />
              </div>
            </Card>

            <Card>
              <SectionTitle>API ключи</SectionTitle>
              <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
                Используйте ключи для интеграций и кастомных модулей.
              </p>

              {apiKeys.map(key => (
                <div key={key.id} className="api-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <div style={{ fontWeight: 600 }}>{key.name}</div>
                    <div>
                      <button className="btn-small bg-gray-200 text-gray-800 mr-2">Скопировать</button>
                      <button className="btn-small bg-red-50 text-red-700">Отозвать</button>
                    </div>
                  </div>
                  <div className="key-box">{key.key}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>
                    Создан: {key.created} · Последнее использование: {key.lastUsed}
                  </div>
                </div>
              ))}

              <button className="mt-6 px-5 py-2.5 bg-accent text-white rounded-lg text-sm font-medium">
                + Создать новый API-ключ
              </button>

              <div className="mt-10 pt-6 border-t">
                <h3 style={{ fontWeight: 600, marginBottom: '1rem' }}>Webhook-и</h3>
                <button className="px-5 py-2 bg-gray-100 text-gray-800 rounded-lg text-sm">
                  + Добавить webhook
                </button>
              </div>
            </Card>
          </>
        );

      case 'integrations':
        return (
          <Card>
            <SectionTitle>Подключённые интеграции</SectionTitle>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem', margin: '1.5rem 0' }}>
              {integrations.map(integration => (
                <div key={integration.id} className="access-card" style={{ opacity: integration.connected ? 1 : 0.6 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      background: integration.color,
                      borderRadius: '10px',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.4rem'
                    }}>
                      {integration.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600 }}>{integration.name}</div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--gray-500)' }}>{integration.description}</div>
                    </div>
                  </div>

                  {integration.connected ? (
                    <>
                      {integration.settings && (
                        <>
                          <ToggleSwitch
                            label="Уведомления о задачах"
                            checked={integration.settings.tasks || false}
                          />
                          <ToggleSwitch
                            label="Уведомления о сообщениях"
                            checked={integration.settings.messages || false}
                          />
                        </>
                      )}
                      <div style={{ color: 'var(--accent)', fontWeight: 500, margin: '1rem 0' }}>Подключено</div>
                      <button className="btn-small bg-red-50 text-red-700">Отключить</button>
                    </>
                  ) : (
                    <button className="mt-4 px-5 py-2 bg-gray-200 text-gray-700 rounded-lg text-sm w-full">
                      Подключить
                    </button>
                  )}
                </div>
              ))}
            </div>

            <button className="px-6 py-3 bg-gray-800 text-white rounded-lg font-medium">
              + Добавить новую интеграцию
            </button>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="settings-page">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="p-6">
        {renderTabContent()}
      </div>
    </div>
  );
};
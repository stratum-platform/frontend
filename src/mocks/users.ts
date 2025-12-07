export interface User {
    id: string, 
    email: string,
    password: string,
    name: string,
    role: 'admin' | 'user'
}

export const mockUsers: User[] = [
    {
        id: '1',
        email: 'admin@corp.ru',
        password: 'admin',
        name: 'Администратор',
        role: 'admin'
    },
]

export const validateUser = (email: string, password: string): User | null => {
    const user = mockUsers.find(u => 
        u.email === email && u.password === password
    )
    return user ? user : null
}

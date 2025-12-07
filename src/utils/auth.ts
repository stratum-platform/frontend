export const isAuthenticated = (): boolean => {
    const exists = !!localStorage.getItem('auth')
    
    return exists ? true : false
}

export const login = (token: string): void => {
    localStorage.setItem('auth', token)
}

export const logout = (): void => {
    localStorage.removeItem('auth')
}

export const getToken = (): string | null => {
    const token = localStorage.getItem('auth')

    return token ? token : null
}
import { useState } from 'react'
import type { FormEvent } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../utils/auth'
import { validateUser } from '../../mocks/users'
 

import { Input } from '../ui/Input'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'

export function LoginForm() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()
    
    function loginSubmit(e: FormEvent) {
        e.preventDefault()
        setError('')

        const user = validateUser(email, password)
    
        if (user) {
            const token = `user-token-${user.id}`
            login(token)
            navigate('/')
        } else {
            setError('Неверный email или пароль')
        }
    }

    return (
        <Card>
            <div className="text-center mb-28">
                <h2 className="text-3xl font-bold text-deep-blue">
                    Corp Tools
                </h2>
                <div className="text-base text-gray-50">
                    Войдите в свой аккаунт
                </div>
            </div>
            
            <form onSubmit={loginSubmit}>
                <div className="space-y-5">
                    <div>
                        <label className="block text-base font-medium mb-2">Email</label>
                        <Input
                            type="email"
                            value = {email}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                            placeholder="you@example.com" />
                    </div>
                    
                    <div>
                        <label className="block text-base font-medium mb-2">Пароль</label>
                        <Input
                            type="password"
                            value = {password}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                            placeholder="••••••••" />
                    </div>

                    {
                        error && (
                            <div className="text-red-500 text-center mt-4">
                                {error}
                            </div>
                        )
                    }
                    
                    <Button variant="login" className="w-full">
                        Войти
                    </Button>

                    <div className='flex justify-between items-center max-w-xs ml-auto mr-auto mt-8'>
                        <div className="text-base text-gray-50">
                            Нет аккаунта? 
                        </div>
                        <a href="#" className="text-base text-deep-blue">
                            Зарегистрироваться
                        </a>
                    </div>
                </div>
            </form>
        </Card>
    )
}
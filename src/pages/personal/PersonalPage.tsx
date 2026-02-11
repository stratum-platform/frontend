import { Profile } from '../../components/personal/Profile'
import { Notifications } from '../../components/personal/Notifications'
import { Theme } from '../../components/personal/Theme'

export function PersonalPage() {
    return (
        <main style={{ 
            padding: '1.5rem 1.5rem 3rem', 
            display: 'grid',
            gap: '25px'
        }}>
            <Profile />
            <Notifications />
            <Theme />
        </main>
    )
}
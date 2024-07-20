import logo from '@/assets/images/icon.svg'
import logoDark from '@/assets/images/icon-dark.svg'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 40 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Flowise'
            />
        </div>
    )
}

export default Logo


import { useTheme } from '../hooks/ThemeProvider'
import { BsSun, BsMoon } from 'react-icons/bs'

function ThemeToggle() {

    const { theme, toggleTheme } = useTheme()

    return (
        <a id="theme-toggle" onClick={toggleTheme} className={theme === 'dark' ? 'sun' : 'moon'}>
            {theme === 'dark' ? <BsSun /> : <BsMoon />}
        </a>
    )
}

export default ThemeToggle

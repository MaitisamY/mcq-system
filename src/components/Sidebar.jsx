import { useTheme } from '../hooks/ThemeProvider'
import { Link, useLocation } from 'react-router-dom'
import { BsHouse, BsFiles } from 'react-icons/bs'
import { FaChartBar } from 'react-icons/fa'

function Sidebar({ type }) {
    
    const { theme } = useTheme()
    
    const location = useLocation();

    return (
        <>
            <div className="head">
                <img alt="logo" src="/fav.png" width="30" />
                <Link 
                    className={`link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} 
                    to={location.pathname}
                >
                    {type.substring(0, 1).toUpperCase() + type.substring(1)} - MCQ's System
                </Link>
            </div>
            <ul>
                <li>
                    <Link 
                        className={`link ${theme === 'dark' && location.pathname === `/${type}` ? 'text-light active' : 'text-dark active'}`} 
                        to={location.pathname}
                    >
                        <BsHouse /> Home
                    </Link>
                </li>
                <li>
                    <Link 
                        className={`link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} 
                        to={`/${type}/tests`}
                    >
                        <BsFiles /> Previous Tests
                    </Link>
                </li>
                <li>
                    <Link 
                        className={`link ${theme === 'dark' ? 'text-light' : 'text-dark'}`} 
                        to={`/${type}/results`}
                    >
                        <FaChartBar /> Results
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default Sidebar;

import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/ThemeProvider';
import { Link } from 'react-router-dom';
import { MENU } from '../data/dummy.js';
import { BsHouse, BsBook, BsPerson, BsFilesAlt } from 'react-icons/bs';
import { FaChartBar } from 'react-icons/fa';

function Sidebar({ type, location }) {

    const { theme } = useTheme();
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        console.log('Current location:', location);
        setMenu(MENU.find(item => item.type === type));
    }, [type, location]);

    const isActive = (path) => {
        return location === path;
    };

    const getLinkClassName = (itemPath) => {
        if (isActive(itemPath)) {
            return theme === 'dark' ? 'link text-light active' : 'link text-dark active';
        } else {
            return theme === 'dark' ? 'link text-light' : 'link text-dark';
        }
    };

    return (
        <>
            <div className="head">
                <img alt="logo" src="/logo.png" width="30" />
                <Link
                    className={`link ${theme === 'dark' ? 'text-light' : 'text-dark'}`}
                    to={location}
                >
                    {type.substring(0, 1).toUpperCase() + type.substring(1)} - MCQ's System
                </Link>
            </div>
            {menu && (
                <ul>
                    {menu.items.map((item, index) => (
                        <li 
                            key={index}
                        >
                            <Link
                                className={getLinkClassName(item.path)}
                                to={item.path}
                            >
                                {renderIcon(item.label)} {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}

function renderIcon(label) {
    switch (label) {
        case 'Previous Tests':
        case 'Tests created':
        case 'Tests':
            return <BsBook size={20} />;
        case 'Students':
            return <FaChartBar size={20} />;
        case 'Teachers':
            return <BsPerson size={20} />;
        case 'Subjects':
            return <BsFilesAlt size={20} />;
        case 'Results':
            return <FaChartBar size={20} />;
        case 'Question bank':
            return <BsBook size={20} />;
        default:
            return <BsHouse size={20} />;
    }
}

export default Sidebar;

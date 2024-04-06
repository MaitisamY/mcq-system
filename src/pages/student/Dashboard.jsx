import '../../styles/dashboard.css'

import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserProvider'

import Sidebar from '../../components/Sidebar'
import Content from '../../components/Content'
import Header from '../../components/Header'

function Dashboard() {

    const { user } = useUser()
    const [notificationMenu, setNotificationMenu] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)

    const navigate = useNavigate()
    const notificationRef = useRef(null);
    const profileRef = useRef(null);

    const toggleNotificationMenu = () => {
        if(profileMenu) {
            setProfileMenu(false)
        }
        setNotificationMenu(!notificationMenu)
    }

    const toggleProfileMenu = () => {
        if(notificationMenu) {
            setNotificationMenu(false)
        }
        setProfileMenu(!profileMenu)
    }

    document.title = `${user.username.substring(0, 1).toUpperCase() + user.username.substring(1)} | Dashboard - MCQ's System`

    if(user.token === '' || user.type !== 'student') {
        navigate('/')
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target) &&
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setNotificationMenu(false);
                setProfileMenu(false);
            }
        };

        window.addEventListener('click', handleClickOutside);
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="dashboard-layout">
            <div className="sider">
                <Sidebar 
                    type="student"
                />
            </div>
            <div className="content">
                <Header 
                    user={user}
                    notificationMenu={notificationMenu}
                    profileMenu={profileMenu}
                    notificationRef={notificationRef}
                    profileRef={profileRef}
                    onNotificationMenuToggle={toggleNotificationMenu}
                    onProfileMenuToggle={toggleProfileMenu}
                />
                <Content />
            </div>
        </div>
    )
}

export default Dashboard;

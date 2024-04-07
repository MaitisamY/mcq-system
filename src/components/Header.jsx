import { useTheme } from '../hooks/ThemeProvider';
import { BsBell, BsPerson } from 'react-icons/bs';
import { data } from '../data/dummy';

function Header({ 
    user, 
    notificationMenu, 
    profileMenu, 
    notificationRef, 
    profileRef, 
    onNotificationMenuToggle, 
    onProfileMenuToggle 
}) {

    const { theme } = useTheme();

    const getNotificationStatus = (status) => {
        if (status === true) {
            return theme === 'dark' ? 'text-light' : 'text-dark';
        } else {
            return 'unread';
        }
    }

    return (
        <div className="header">
            <a 
                ref={notificationRef} 
                className="block non-bordered" 
                onClick={onNotificationMenuToggle}
            >
                <BsBell size={20} />
                {
                    notificationMenu && (
                        <div className={`menu ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                            <ul>
                                {
                                    data.notifications.map((item, index) => (
                                        <li className={getNotificationStatus(item.read)} key={index}>
                                            <p className="date">{item.date}</p>
                                            {item.message.slice(0, 35)}...
                                        </li>
                                    ))
                                }
                            </ul>
                            <button className="primary">View All</button>
                        </div>
                    )
                }
            </a>
            <a ref={profileRef} className="block bordered" onClick={onProfileMenuToggle}>
                <BsPerson size={20} /> {user.username}
                {
                    profileMenu && (
                        <div className={`menu ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
                            <h3>{user.email}</h3>
                            <button className="danger">Logout</button>
                        </div>
                    )
                }
            </a>
        </div>
    )
}

export default Header;

import { BsBell, BsPerson, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { data } from '../data/dummy'

function Header({ 
    user, 
    notificationMenu, 
    profileMenu, 
    notificationRef, 
    profileRef, 
    onNotificationMenuToggle, 
    onProfileMenuToggle 
}) {

    return (
        <div className="header">
            <a ref={notificationRef} className="block non-bordered" onClick={onNotificationMenuToggle}><BsBell size={20} />
                {
                    notificationMenu && (
                        <div className="menu">
                            <ul>
                                {
                                    data.notifications.map((item, index) => (
                                        <li className={item.read === true ? '' : 'unread'} key={index}>
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
                <BsPerson /> {user.username}
                {
                    profileMenu && (
                        <div className="menu">
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

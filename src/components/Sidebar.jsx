import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className="sidebar">
            <Link to="/"><h1>MCQ's System</h1></Link>
            <ul>
                <li><Link to="/student/dashboard">Dashboard</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar;

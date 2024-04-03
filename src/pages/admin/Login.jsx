import '../../styles/login.css'

import { Link } from 'react-router-dom'

function AdminLogin() {
    return (
        <>
            <Link to="/">Student</Link>
            <h1>Admin Login</h1>
            <Link to="/teacher">Teacher</Link>
        </>
    )
}

export default AdminLogin;

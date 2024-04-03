import '../../styles/login.css'

import { Link } from 'react-router-dom'

function StudentLogin() {
    return (
        <>
            <Link to="/admin">Admin</Link>
            <h1>Student Login</h1>
            <Link to="/teacher">Teacher</Link>
        </>
    )
}

export default StudentLogin;

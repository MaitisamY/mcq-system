import '../../styles/login.css'

import { Link } from 'react-router-dom'

function TeacherLogin() {
    return (
        <>
            <Link to="/">Student</Link>
            <h1>Teacher Login</h1>
            <Link to="/admin">Admin</Link>
        </>
    )
}

export default TeacherLogin;


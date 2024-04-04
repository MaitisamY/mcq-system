import '../../styles/login.css'

import { Link } from 'react-router-dom'

import LoginForm from '../../components/LoginForm'

function AdminLogin() {

    document.title = `Sign-in | Admin - MCQ's System`

    return (
        <>
            <div className="pills">
                <ul>
                    <li><Link className="link" to="/">Student</Link></li>
                    <li><Link className="link" to="/teacher">Teacher</Link></li>
                    <li><Link className="link active" to="/admin">Admin</Link></li>
                </ul>
            </div>
            <LoginForm formType="admin" />
        </>
    )
}

export default AdminLogin;

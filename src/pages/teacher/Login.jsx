import '../../styles/login.css'

import { Link } from 'react-router-dom'

import LoginForm from '../../components/LoginForm'

function TeacherLogin() {
    return (
        <>
            <div className="pills">
                <ul>
                    <li><Link className="link" to="/">Student</Link></li>
                    <li><Link className="link active" to="/teacher">Teacher</Link></li>
                    <li><Link className="link" to="/admin">Admin</Link></li>
                </ul>
            </div>
            <LoginForm />
        </>
    )
}

export default TeacherLogin;


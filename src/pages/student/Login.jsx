import '../../styles/login.css'

import { Link } from 'react-router-dom'

import LoginForm from '../../components/LoginForm'

function StudentLogin() {

    document.title = `Sign-in | Student - MCQ's System`

    return (
        <>
            <div className="pills">
                <ul>
                    <li><Link className="link active" to="/">Student</Link></li>
                    <li><Link className="link" to="/teacher">Teacher</Link></li>
                    <li><Link className="link" to="/admin">Admin</Link></li>
                </ul>
            </div>
            <LoginForm formType="student" />
        </>
    )
}

export default StudentLogin;

import '../../styles/login.css'

import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserProvider'

import LoginForm from '../../components/LoginForm'

function StudentLogin() {

    const { user } = useUser()
    const navigate = useNavigate()

    document.title = `Sign-in | Student - MCQ's System`

    if(user.token !== '' && user.type === 'student') {
        navigate('/student/dashboard')
    }

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

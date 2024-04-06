import '../../styles/login.css'

import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserProvider'

import LoginForm from '../../components/LoginForm'

function TeacherLogin() {

    const { user } = useUser()
    const navigate = useNavigate()

    document.title = `Sign-in | Teacher - MCQ's System`

    if(user.token !== '' && user.type === 'teacher') {
        navigate('/teacher/dashboard')
    }

    return (
        <>
            <div className="pills">
                <ul>
                    <li><Link className="link" to="/">Student</Link></li>
                    <li><Link className="link active" to="/teacher">Teacher</Link></li>
                    <li><Link className="link" to="/admin">Admin</Link></li>
                </ul>
            </div>
            <LoginForm formType="teacher" />
        </>
    )
}

export default TeacherLogin;


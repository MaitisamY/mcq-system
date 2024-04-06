import '../../styles/login.css'

import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserProvider'

import LoginForm from '../../components/LoginForm'

function AdminLogin() {

    const { user } = useUser()
    const navigate = useNavigate()

    document.title = `Sign-in | Admin - MCQ's System`

    if(user.token !== '' && user.type === 'admin') {
        navigate('/admin/dashboard')
    }

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

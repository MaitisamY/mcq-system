import './styles/global.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/ThemeProvider'

import StudentLogin from './pages/student/Login'
import AdminLogin from './pages/admin/Login'
import TeacherLogin from './pages/teacher/Login'
import StudentDashboard from './pages/student/Dashboard'
import TeacherDashboard from './pages/teacher/Dashboard'
import AdminDashboard from './pages/admin/Dashboard'

import ThemeToggle from './components/ThemeToggle'

const App = () => {

    const { theme } = useTheme()

    return (
        <div id="app" className={theme === 'dark' ? 'dark' : 'light'}>
            <ThemeToggle />
            <Router>
                <Routes>
                    <Route path="/" element={<StudentLogin />} />
                    <Route path="/admin" element={<AdminLogin />} />
                    <Route path="/teacher" element={<TeacherLogin />} />
                    <Route path="/student/dashboard" element={<StudentDashboard />} />
                    <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
                    <Route path="/admin/dashboard" element={<AdminDashboard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
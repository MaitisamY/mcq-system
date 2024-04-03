import './styles/global.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useTheme } from './hooks/ThemeProvider'

import StudentLogin from './pages/student/Login'
import AdminLogin from './pages/admin/Login'
import TeacherLogin from './pages/teacher/Login'

import ThemeToggle from './components/ThemeToggle'

const App = () => {

    const { theme } = useTheme()

    return (
        <div id="app" className={theme === 'dark' ? 'dark' : 'light'}>
            <div id="app-name">
                <h1>MCQ's System</h1>
            </div>
            <ThemeToggle />
            <Router>
                <Routes>
                    <Route path="/" element={<StudentLogin />} />
                    <Route path="/admin" element={<AdminLogin />} />
                    <Route path="/teacher" element={<TeacherLogin />} />
                </Routes>
            </Router>
        </div>
    )
}

export default App;
import './styles/global.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { useTheme } from './hooks/ThemeProvider'

import StudentLogin from './pages/student/Login'
import AdminLogin from './pages/admin/Login'
import TeacherLogin from './pages/teacher/Login'

const App = () => {

    const { theme } = useTheme()

    return (
        <div id="app" className={theme === 'dark' ? 'dark' : 'light'}>
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
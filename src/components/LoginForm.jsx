import { useState, useEffect } from 'react'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { useNavigate } from 'react-router'
import axios from 'axios'

function LoginForm({ formType }) {

    /* Logics and States */

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        fieldOne: '',
        fieldTwo: '',
    })

    const [errors, setErrors] = useState({
        errorOne: '',
        errorTwo: '',
    })

    const [serverError, setServerError] = useState('')

    const [isShown, setIsShown] = useState(false)

    const handleFormData = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handlePasswordToggle = () => {
        setIsShown(prevState => !prevState)
    }

    const handleBlurEvent = (e) => {
        const { name, value } = e.target
        const validate = validation({ name, value })
        setErrors(prevState => ({
            ...prevState,
            [name]: validate
        }))
    }

    const validation = ({ name, value }) => {
        if (name === 'fieldOne' && value === '') {
            setErrors(prevState => ({
                ...prevState,
                errorOne: 'Username is required'
            }))
            return
        }
        else if (name === 'fieldOne' && value.length < 3) {
            setErrors(prevState => ({
                ...prevState,
                errorOne: 'Username must be at least 3 characters'
            }))
            return
        }
        else if (name === 'fieldOne' && !value.match(/^[a-zA-Z]+$/)) {
            setErrors(prevState => ({
                ...prevState,
                errorOne: 'Username must only contain letters'
            }))
            return
        }
        else if (name === 'fieldTwo' && value === '') {
            setErrors(prevState => ({
                ...prevState,
                errorTwo: 'Password is required'
            }))
            return
        }
        else if (name === 'fieldTwo' && value.length < 3) {
            setErrors(prevState => ({
                ...prevState,
                errorTwo: 'Password must be at least 3 characters'
            }))
            return
        }
        else {
            setErrors(prevState => ({
                ...prevState,
                errorOne: '',
                errorTwo: '',
            }))
        }
    }

    useEffect(() => {
        if (
            errors.errorOne === '' 
            && errors.errorTwo === '' 
            && errors.errorOne.length >= 3 
            && errors.errorTwo.length >= 3
        ){
            setErrors(prevState => ({
                ...prevState,
                errorOne: '',
                errorTwo: '',
            }))
        }

        if (serverError !== '') {
            const timer = setTimeout(() => {
                setServerError('')
            }, 8000);
    
            return () => clearTimeout(timer);
        }
    }, [serverError])

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const { fieldOne, fieldTwo } = formData;
    
        /* Validating and navigating without API calls right now */

        if (fieldOne.trim() === '' || fieldTwo.trim() === '') {
            setServerError('All fields are required');
        }
        else if (!fieldOne.match(/^[a-zA-Z]+$/)) {
            setServerError('Username must only contain letters');
        }
        else if (fieldOne.length < 3 || fieldTwo.length < 3) {
            setServerError('All fields must be at least 3 characters');
        }
        else {
            login()
            setServerError('');
        }
    }

    /* API calls will be added here */
    async function login() {
        const { fieldOne, fieldTwo } = formData;

        try {
            let response;
            const headers = {
                username: fieldOne,
                password: fieldTwo,
                type: formType
            }

            if (formType === 'student') {
                response = await axios.post('http://localhost:5000/student/login', headers)
                return response
            }

            if (formType === 'admin') {
                response = await axios.post('http://localhost:5000/admin/login', headers)
                return response
            }

            if (formType === 'teacher') {
                response = await axios.post('http://localhost:5000/teacher/login', headers)
                return response
            }

            if (response.data.status !== 200) {
                setServerError(response.data.message);
            }
            else {
                localStorage.setItem('token', response.data.session.token);
                localStorage.setItem('user', response.data.session.username);
                setTimeout(() => {
                    navigate('/student/dashboard');
                }, 3000)
            }
        }
        catch (error) {
            setServerError('Server error, please try again later');
        }
            
    }

    useEffect(() => {
        
    })

    /* Rendering JSX */

    return (
        <>
            <div className="login-form">
                <h1>MCQ's System</h1>
                <p>Sign-in to your {formType === 'student' ? 'student' : formType === 'admin' ? 'admin' : 'teacher'} account</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="fieldOne" 
                            placeholder="E.g. john123" 
                            onChange={handleFormData} 
                            value={formData.fieldOne} 
                            onBlur={handleBlurEvent}
                        />
                    </div>
                    <p>{errors && errors.errorOne.length > 0 && errors.errorOne}</p>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type={isShown ? "text" : "password"} 
                            id="password" 
                            name="fieldTwo" 
                            placeholder="Enter your password"
                            onChange={handleFormData}
                            value={formData.fieldTwo} 
                            onBlur={handleBlurEvent}
                        />
                        <span className="password-toggle">
                            {isShown ? <BsEyeSlash onClick={handlePasswordToggle} /> : <BsEye onClick={handlePasswordToggle} />}
                        </span>
                    </div>
                    <p>{errors && errors.errorTwo.length > 0 && errors.errorTwo}</p>
                    <button type="submit">Login</button>
                </form>
            </div>
            {
                serverError && <div className="toast">{serverError}</div>
            }
        </>
    )
}

export default LoginForm;

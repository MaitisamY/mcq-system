
import { useState, useEffect } from 'react'

import { BsEyeSlash, BsEye } from 'react-icons/bs'

function LoginForm() {

    const [formData, setFormData] = useState({
        fieldOne: '',
        fieldTwo: '',
    })

    const [errors, setErrors] = useState({
        errorOne: '',
        errorTwo: '',
    })

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
        return validate
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const { fieldOne, fieldTwo } = formData
        const { errorOne, errorTwo } = errors
        
        if (
            fieldOne !== '' 
            && fieldTwo !== '' 
            && errorOne === '' 
            && errorTwo === ''
            && fieldOne.length >= 3
            && fieldTwo.length >= 3
        ) {
            alert('Login Successful')
        }
    }

    const validation = ({ name, value }) => {
        if (name === 'fieldOne' && value === '') {
            setErrors(prevState => ({
                ...prevState,
                errorOne: 'Username is required'
            }))
            return
        }
        if (name === 'fieldTwo' && value === '') {
            setErrors(prevState => ({
                ...prevState,
                errorTwo: 'Password is required'
            }))
            return
        }
        if (name === 'fieldOne' && value.length < 3) {
            setErrors(prevState => ({
                ...prevState,
                errorOne: 'Username must be at least 3 characters'
            }))
            return
        }
        if (name === 'fieldTwo' && value.length < 3) {
            setErrors(prevState => ({
                ...prevState,
                errorTwo: 'Password must be at least 3 characters'
            }))
            return
        }
    }

    useEffect(() => {
        if (
            errors.errorOne !== '' 
            && errors.errorTwo !== '' 
            && errors.errorOne.length >= 3 
            && errors.errorTwo.length >= 3
        ){
            setErrors(prevState => ({
                ...prevState,
                errorOne: '',
                errorTwo: '',
            }))
        }
    }, [])

    return (
        <div className="login-form">
            <h2>Sign-in</h2>
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
    )
}

export default LoginForm;

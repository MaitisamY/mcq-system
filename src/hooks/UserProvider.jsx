import { createContext, useContext, useState } from 'react'

const UserContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const dispatch = (name, value) => {
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <UserContext.Provider value={{ user, dispatch }}>
            {children}
        </UserContext.Provider>
    )
}
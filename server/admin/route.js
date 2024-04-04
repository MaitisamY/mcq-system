import { db } from '../config.js'

export const getStudent = async (username, password, res) => {
    if(username !== '' && password !== '') {
        const sql = 'SELECT * FROM student WHERE username = $1 AND password = $2'
        const values = [username, password]

        try {
            db.connect()
            return await db.query(sql, values) 
        } catch (error) {
            res.json({ status: 500 })
        }

        db.end()
    }
}
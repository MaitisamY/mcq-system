import { db } from '../config.js';

/* Get query for student, admin and teacher */
export const getRow = async (username, password, type) => {
    try {
        let sql, values;

        if (type === 'student') {
            sql = `SELECT * FROM student WHERE username = $1 AND password = $2`
            values = [username, password]
        }

        if (type === 'admin') {
            sql = `SELECT * FROM admin WHERE username = $1 AND password = $2`
            values = [username, password]
        }

        if (type === 'teacher') {
            sql = `SELECT * FROM teacher WHERE username = $1 AND password = $2`
            values = [username, password]
        }

        const result = await db.query(sql, values)
        
        // Check if any rows were returned
        if (result.rows.length > 0) {
            return { status: 200, data: result.rows }
        } else {
            return { status: 404, message: 'Username or password is incorrect' }
        }
    } catch (error) {
        console.error('Error executing query:', error);
        return { status: 500, message: 'Internal server error' }
    }
}

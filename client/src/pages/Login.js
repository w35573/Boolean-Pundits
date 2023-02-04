import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import "../styles/login.css"

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('student');
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()

        await login(email, password, role)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log In</h3>

            <div className="login-email">
                <label>Email address:</label>
                <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </div>

            <div className="login-password">
                <label>Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <div className="login-role">
                <label>Role:</label>
                <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="student">Student</option>
                    <option value="user">Volunteer</option>
                </select>
            </div>

            <button disabled={isLoading} className="login-btn" id='login-btn'>Log in</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login, error, isLoading } = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await login(email, password)
    }
  return (
    <form className='login' onSubmit={handleSubmit}>
        <h3>Log in</h3>
          <label>Email:</label>
          <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password:</label>
          <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
          />

          <div className='loginbtn'>
            <div>
              <button disabled={isLoading}>Log in</button>
            </div>
          </div>
          <div className='signuplink'>
            <p className='p1'>Don't have an account?</p>
            <Link to="/signup" className='_signup'>Sign up</Link>
          </div>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Login

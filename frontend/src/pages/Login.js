import { useState } from 'react';
import { Link } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log(email, password)
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
              <button >Log in</button>
            </div>
          </div>
          <div className='signuplink'>
            <p className='p1'>Don't have an account?</p>
            <Link to="/signup" className='_signup'>Sign up</Link>
          </div>
    </form>
  )
}

export default Login

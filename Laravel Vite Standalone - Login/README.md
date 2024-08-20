# Laravel Vite Standalone - Login

1. Folder Setup

Folder Setup

```
project_name -> src -> components
```

File Setup

```
project_name -> src -> components -> Login.jsx
```

2. open `Login.jsx`

```
import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('admin');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const validate = () => {
        const errors = {};
        if (!email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Email is invalid';
        }

        if (!password) {
            errors.password = 'Password is required';
        } else if (password.length < 2) {
            errors.password = 'Password must be at least 6 characters';
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setErrors({});
            setLoading(true);
            setMessage('');
            
            try {
                const response = await fetch('http://192.168.1.122:8000/api_v2/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });

                const data = await response.json();
                setLoading(false);

                if (response.ok) {
                    setMessage(`Login successful! Token: ${data}`);
                    setMessage(`Login successful! Token: ${data || 'N/A'}`);
                    console.log('Logged in:', data);

                    // Example: Logging token or other response data
                    console.log('Token:', data);
                } else {
                    setMessage('Login failed. Please try again.');
                    setErrors(data.errors || {});
                }
                
            } catch (error) {
                setLoading(false);
                setMessage('Login failed. Please try again.');
                console.error('Error:', error);
            }
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="container mt-5">

            <h2>Login</h2>

            <form onSubmit={handleSubmit} noValidate>

                <div className="mb-3">

                    <label htmlFor="email" className="form-label">Email</label>

                    <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}

                </div>

                <div className="mb-3">

                    <label htmlFor="password" className="form-label">Password</label>

                    <input
                        type="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}

                </div>

                <button type="submit" className="btn btn-primary" disabled={loading}>

                    {loading ? 'Logging in...' : 'Login'}

                </button>
                
                {message && <div className={`mt-3 ${message.includes('successful') ? 'text-success' : 'text-danger'}`}>

                    {message}
                    
                </div>}

            </form>
        </div>
    );
};

export default Login;
```

3. open `App.jsx`

```
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

// import './App.css'


function App() {
  return (
    <>
      <div>

        <BrowserRouter>
          
          <Routes>
              <Route path="/" element={<Login/>} />              
          </Routes>

        </BrowserRouter>

      </div>
    </>
  )
}

export default App
```

![Image](4.PNG)

![Image](5.PNG)

![Image](6.PNG)
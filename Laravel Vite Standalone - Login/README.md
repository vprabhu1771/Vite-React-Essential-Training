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
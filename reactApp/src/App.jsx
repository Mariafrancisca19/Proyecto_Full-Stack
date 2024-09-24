import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Estilos/App.css'

import Registrarse from './Componentes/Registrarse'
import Login from './Componentes/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Registrarse/>
      <Login/>

    </div>
    
  )

}

export default App

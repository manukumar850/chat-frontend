import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import toast, { Toaster } from 'react-hot-toast'
import JoinCreateChat from './components/joinCreateChat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <JoinCreateChat></JoinCreateChat>
    </div>
    
  )
}

export default App

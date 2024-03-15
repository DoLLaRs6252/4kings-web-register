import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SortingHat from './components/SortingHat'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <SortingHat />
    </div>
  )
}

export default App

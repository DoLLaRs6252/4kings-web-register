import { useState } from 'react'
import Main_page from './Pages/Main_page'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Main_page />
    </div>
  )
}

export default App

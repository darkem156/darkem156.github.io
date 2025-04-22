import '../css/App.css'
import { createContext, Dispatch, SetStateAction, useState } from 'react'
import Home from './Home'
import Content from './Content'

export const MenuContext = createContext<{hash: string, setHash: Dispatch<SetStateAction<string>>}>({hash: '', setHash: () => {}})

function App() {
  const [hash, setHash] = useState(window.location.hash || '#about')
  return (
    <MenuContext.Provider value={{ hash, setHash }}>
      <main>
        <Home />
        <Content />
      </main>
    </MenuContext.Provider>
  )
}

export default App

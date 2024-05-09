import { useState } from "react"
import Form from "./Hooks/Form"
import { ThemeContext } from "./Contexts/ThemeContext";



function App() {

  // Ejm 1 - Actualizar un valor a través del contexto 
  
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <Form/>
      </ThemeContext.Provider>
      <label>
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={(e) => {
            setTheme(e.target.checked ? 'dark' : 'light')
          }}
        ></input>
        Usar modo oscuro
      </label>
    </>
    
  )
}

export default App

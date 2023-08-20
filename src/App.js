import React, { useContext } from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import { Intro } from './components/intro/Intro'
import ProjectList from './components/projectsList/ProjectList'
import Toggle from './components/toggle/Toggle'
import { ThemeContext } from './Context'

const App = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div style={{backgroundColor:darkMode ? "#222" : "white", color: darkMode && "white"}}>
      <Toggle/>
      <Intro />
      <About />
      <ProjectList />
      <Contact />
    </div>
  )
}

export default App
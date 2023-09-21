import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Start from './Components/Start'
import Dogs from './Components/Dogs'
import Info from './Components/Info'





function App() {
  const START = 'start', DOGS = 'dogs', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(START);

  let content = null;

  switch(currentScreen) {
    case START :
    content = <Start nextScreen={() => setCurrentScreen(DOGS)}/>;
    break;

    case DOGS :
    content = <Dogs  showResult={() => setCurrentScreen(INFO)}/>;
    break;

    case INFO :
      content = <Info score={score} restart={restartQuiz}/>
      break;

   default:
    content = <Start />;
   
  }

  return (
   
    <div>
      {content}
    </div>
    
  )
}

export default App

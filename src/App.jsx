import React, { Fragment, useState } from 'react';
import './App.css';


import Start from './Components/Start';
import Dogs from './Components/Dogs';
import Info from './Components/Info';
import Navbar from './Components/Navbar';

function App() {
  const START = 'start', DOGS = 'dogs', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(START);
  console.log(currentScreen);

  let content = null;

  switch (currentScreen) {
    case START:
      content = <Start nextScreen={() => setCurrentScreen(DOGS)} />;
      break;

    case DOGS:
      content = <Dogs />//nextScreen={() => setCurrentScreen(INFO)} />;
      break;

    case INFO:
      content = <Info nextScreen={() => setCurrentScreen(DOGS)} />;
      break;

    default:
      content = <Start />;
  }

  return (
    <Fragment>
      
      <Navbar nextScreen={() => setCurrentScreen(DOGS)} />
      <div className='content'>{content}</div>
    </Fragment>
  );
}

export default App;

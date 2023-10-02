import React, { Fragment, useState } from 'react';
import './App.css';


import Start from './Components/Start';
import Dogs from './Components/Dogs';
import Info from './Components/Info';
import Navbar from './Components/Navbar';

function App() {
  const START = 'start', DOGS = 'dogs', SERVICES = 'services', CONTACT = 'contact';
  const [currentScreen, setCurrentScreen] = useState(START);
  console.log(currentScreen);

  let content = null;

  switch (currentScreen) {
    case START:
      content = <Start nextScreen={() => setCurrentScreen(START)} />;
      break;

    case DOGS:
      content = <Dogs />//nextScreen={() => setCurrentScreen(INFO)} />;
      break;

    case SERVICES:
      content = <Services /> // nextScreen={() => setCurrentScreen(SERVICES)} />;
      break;

    case CONTACT:
      content = <Contact /> // nextScreen={() => setCurrentScreen(CONTACT)} />;
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

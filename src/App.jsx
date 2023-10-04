import React, { Fragment, useState } from 'react';
import './App.css';


import Start from './Components/Start';
import Dogs from './Components/Dogs';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Navbar from './Components/Navbar';

function App() {
  const START = 'start', DOGS = 'dogs', SERVICES = 'services', CONTACT = 'contact', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(START);
  console.log(currentScreen);

  let content = null;

  switch (currentScreen) {
    case START:
      content = <Start />;
      break;

    case DOGS:
      content = <Dogs infoScreen={() => { console.log('infosidan '); setCurrentScreen(INFO)}}/>
      break;

    case SERVICES:
      content = <Services /> 
      break;

    case CONTACT:
      content = <Contact /> 
      break;

      case INFO: 
      content = <Info />
      break;

    default:
      content = <Start />;
  }

  return (
    <Fragment>
      
      <Navbar 
      homeScreen={() => setCurrentScreen(START)}
      dogsScreen={() => setCurrentScreen(DOGS)}
      servicesScreen={() => setCurrentScreen(SERVICES)}
      contactScreen={() => setCurrentScreen(CONTACT)}
      infoScreen={() => setCurrentScreen(INFO)}
      
      />
      <div className='content'>{content}</div>
     
    </Fragment>
  );
}

export default App;

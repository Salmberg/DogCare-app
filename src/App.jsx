import React, { Fragment, useState } from 'react';
import './App.css';

import Start from './Components/Start';
import Dogs from './Components/Dogs';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Info from './Components/Info';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  const START = 'start', DOGS = 'dogs', SERVICES = 'services', CONTACT = 'contact', INFO = 'info';
  const [currentScreen, setCurrentScreen] = useState(START);
  const [selectedDog, setSelectedDog] = useState(null);
  console.log(currentScreen);

  let content = null;

  switch (currentScreen) {
    case START:
      content = <Start />;
      break;

    case DOGS:
      content = <Dogs infoScreen={(dog) => { setSelectedDog(dog); setCurrentScreen(INFO); }} /> // Uppdatera infoScreen-prop
      break;

    case SERVICES:
      content = <Services /> 
      break;

    case CONTACT:
      content = <Contact /> 
      break;

      case INFO: 
      content = <Info dog={selectedDog}/>
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
      <Footer />

    </Fragment>
    
  );
}

export default App;

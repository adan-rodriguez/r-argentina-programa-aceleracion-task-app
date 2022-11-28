import React from 'react';
import TaskApp from './components/TaskApp';
import Logo from './assets/images/logo.png';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <img src={Logo} alt="Logo" className="logo" />
      <TaskApp />
      <Footer />
    </>
  );
}

export default App;

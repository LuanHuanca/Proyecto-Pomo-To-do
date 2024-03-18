// App.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import NavBar from '/src/components/NavBar';
import Aside from '/src/components/Aside';
import Content from '/src/components/Content';
// import Footer from '/src/components/Footer'; // Importa el componente Footer

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeScreen/>} />
      </Routes>
    </div>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
export default Root;
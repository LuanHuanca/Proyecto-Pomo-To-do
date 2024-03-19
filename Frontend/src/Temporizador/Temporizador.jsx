import React, { useState } from 'react'
import Timer from './Timer';
import Settings from './Settings';
import SettingsContext from "./SettingsContext";
import './Temporizador.css'

const Temporizador = () => {
    const [showSettings, setShowSettings] = useState(false);
    const [workMinutes, setWorkMinutes] = useState(20);
    const [breakMinutes, setBreakMinutes] = useState(5);
  
    return (
    <div className='temporizador'>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings/> : <Timer />}
      </SettingsContext.Provider>
    </div>
  )
}

export default Temporizador

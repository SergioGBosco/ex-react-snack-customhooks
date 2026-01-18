import React, { useState } from 'react'


const useSwitch = (valoreIniziale = false) => {
  const [isOn, setIsOn] = useState(valoreIniziale);

  const toggle = () => {
    setIsOn(curr => !curr);
  }
  return (
    [isOn, toggle]
  )
}

export default useSwitch

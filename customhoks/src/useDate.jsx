import React, { useEffect, useState } from 'react'

const useDate = () => {

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);


  return currentDate;


}

export default useDate

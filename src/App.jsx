import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [timer , setTimer] = useState(new Date())


  useEffect(()=>{
    const time = setInterval(()=>{
        setTimer(new Date())
    },1000)
    return ()=> clearInterval(time)
  },[])


  const handlePrefix = (hour)=>{
    return hour < 10 ? `${0}${hour}` : hour
  }

  const handleHours = (hours)=>{
    return hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
  }

  const handleDate = (date)=>{
    const option = { weekday : "long" , year : "numeric" , day:"numeric" ,month:"long"}
    return date.toLocaleDateString(undefined , option)
  }

  return (
    <>
      <div className="digital-clock">
        <div className="box"></div>
        <div className="clock-container">
        <h2>Digital Clock</h2>
        <div className="timer">
          {handlePrefix(handleHours(timer.getHours()))} :  {handlePrefix(timer.getMinutes())} : {handlePrefix(timer.getSeconds())} {timer.getHours() >= 12 ? "PM" : "AM"}
          </div>
        <div className="date">{handleDate(timer)}</div>
        </div>
      </div>
    </>
  )
}

export default App

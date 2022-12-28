import { useEffect, useState } from 'react';
import './App.scss'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Container from './Components/Container/Container';
import Process from './Components/Process /Process';


function App() {

  const [baseData, setData] = useState('')

  useEffect(() => {
    fetch('/downloaded').then(res => res.json()).then(data => {
      setTimeout(() => {
        setData(data.message)
      }, 1)
    });
  },[])

  return (
    <div className="App">
      {baseData ? <Container/> : <Process/>}

    </div>
  )
}

export default App

import './App.css';
import { useEffect, useState } from  'react'
import Home from './pages/Home'
import Loader from  './pages/loader/Loader'
function App() {
  const [load, setLoad ] = useState(true)

  useEffect(() => {
    const getHome = setInterval(() => {
      setLoad(false)
    },3000)
         return () => clearInterval(getHome)
  },[])

  return (
    <div className="App">
      {
          load ? <Loader /> :  <Home />
      }
    </div>
  );
}
export default App;
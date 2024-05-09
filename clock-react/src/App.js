import style from './App.module.css';
import { useState, useEffect } from 'react';


function App() {

  const [clock, setClock] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date())
    }, 1000);
    return () => clearInterval(interval);
  }, [clock])

  return <>

    <div className={style.wrapper}>
      <div className={style.rainbow}></div>
      <div className={style.clock}>
        <div className={style.texts}>
          <h1>{clock.getHours()}:{clock.getMinutes()}:{clock.getSeconds()}</h1>
          <h4>{clock.getDate()}:{clock.getMonth()}:{clock.getFullYear()}</h4>
        </div>
      </div>

    </div>

  </>;
}

export default App;

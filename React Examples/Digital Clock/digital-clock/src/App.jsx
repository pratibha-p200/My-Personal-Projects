import {useState, useEffect} from 'react';
 import './index.css';

 function App(){
  const [time , setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(()=>{
      setTime(new Date());
    },1000);

    return () => clearInterval(timer);

  }, []);

  return(
    <div calassName="container">
      <h1>Digital Clock</h1>
      
      <div className="clock">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
 }

 export default App;
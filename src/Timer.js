import { useState, useRef } from 'react';

function Timer() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const interval = useRef(null);

  function start() {
    if (running) return;
    setRunning(true);
    interval.current = setInterval(() => {
      setTime(t => t + 10);
    }, 10);
  }

  function stop() {
    clearInterval(interval.current);
    setRunning(false);
  }

  function reset() {
    clearInterval(interval.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  }

  function lap() {
    if (!running) return;
    setLaps(l => [...l, time]);
  }

  function format(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centiseconds = Math.floor((ms % 1000) / 10);
    return `${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}.${String(centiseconds).padStart(2,'0')}`;
  }

  return (
    <div style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px',textAlign:'center'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px',textAlign:'left'}}>Stopwatch</h2>
      <div style={{fontSize:'64px',fontWeight:'bold',color:'#333',marginBottom:'30px',fontFamily:'monospace'}}>{format(time)}</div>
      <div style={{display:'flex',gap:'12px',justifyContent:'center',marginBottom:'20px'}}>
        <button onClick={start} style={{background:'#28a745',color:'white',border:'none',padding:'12px 24px',borderRadius:'8px',fontSize:'15px',cursor:'pointer'}}>Start</button>
        <button onClick={stop} style={{background:'#dc3545',color:'white',border:'none',padding:'12px 24px',borderRadius:'8px',fontSize:'15px',cursor:'pointer'}}>Stop</button>
        <button onClick={lap} style={{background:'#6200ea',color:'white',border:'none',padding:'12px 24px',borderRadius:'8px',fontSize:'15px',cursor:'pointer'}}>Lap</button>
        <button onClick={reset} style={{background:'#555',color:'white',border:'none',padding:'12px 24px',borderRadius:'8px',fontSize:'15px',cursor:'pointer'}}>Reset</button>
      </div>
      {laps.length > 0 && (
        <div style={{textAlign:'left'}}>
          <h3 style={{color:'#6200ea',marginBottom:'10px'}}>Laps</h3>
          {laps.map((lap, i) => (
            <div key={i} style={{display:'flex',justifyContent:'space-between',padding:'8px 12px',background:'#f8f4ff',borderRadius:'6px',marginBottom:'6px'}}>
              <span style={{color:'#555'}}>Lap {i + 1}</span>
              <span style={{color:'#333',fontWeight:'bold',fontFamily:'monospace'}}>{format(lap)}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Timer;

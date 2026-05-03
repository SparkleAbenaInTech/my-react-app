import { useState, useEffect, useRef } from 'react';

function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [mode, setMode] = useState('work');
  const [sessions, setSessions] = useState(0);
  const interval = useRef(null);

  useEffect(() => {
    if (running) {
      interval.current = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval.current);
            setRunning(false);
            if (mode === 'work') {
              setSessions(s => s + 1);
              setMode('break');
              setMinutes(5);
            } else {
              setMode('work');
              setMinutes(25);
            }
            setSeconds(0);
          } else {
            setMinutes(m => m - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(s => s - 1);
        }
      }, 1000);
    }
    return () => clearInterval(interval.current);
  }, [running, minutes, seconds, mode]);

  function reset() {
    clearInterval(interval.current);
    setRunning(false);
    setMinutes(mode === 'work' ? 25 : 5);
    setSeconds(0);
  }

  function switchMode(newMode) {
    clearInterval(interval.current);
    setRunning(false);
    setMode(newMode);
    setMinutes(newMode === 'work' ? 25 : 5);
    setSeconds(0);
  }

  const isWork = mode === 'work';

  return (
    <div style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px',textAlign:'center'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px',textAlign:'left'}}>Pomodoro Timer 🍅</h2>
      <div style={{display:'flex',gap:'10px',justifyContent:'center',marginBottom:'24px'}}>
        <button onClick={() => switchMode('work')} style={{padding:'8px 20px',borderRadius:'20px',border:'none',cursor:'pointer',background: isWork ? '#6200ea' : '#f0f0f0',color: isWork ? 'white' : '#555',fontWeight:'bold'}}>Work 25min</button>
        <button onClick={() => switchMode('break')} style={{padding:'8px 20px',borderRadius:'20px',border:'none',cursor:'pointer',background: !isWork ? '#28a745' : '#f0f0f0',color: !isWork ? 'white' : '#555',fontWeight:'bold'}}>Break 5min</button>
      </div>
      <div style={{fontSize:'80px',fontWeight:'bold',color: isWork ? '#6200ea' : '#28a745',fontFamily:'monospace',marginBottom:'24px'}}>
        {String(minutes).padStart(2,'0')}:{String(seconds).padStart(2,'0')}
      </div>
      <div style={{display:'flex',gap:'12px',justifyContent:'center',marginBottom:'20px'}}>
        <button onClick={() => setRunning(r => !r)} style={{background: running ? '#dc3545' : '#6200ea',color:'white',border:'none',padding:'14px 32px',borderRadius:'8px',fontSize:'16px',cursor:'pointer',fontWeight:'bold'}}>
          {running ? 'Pause' : 'Start'}
        </button>
        <button onClick={reset} style={{background:'#555',color:'white',border:'none',padding:'14px 32px',borderRadius:'8px',fontSize:'16px',cursor:'pointer'}}>Reset</button>
      </div>
      <div style={{background:'#f8f4ff',borderRadius:'8px',padding:'14px'}}>
        <p style={{color:'#6200ea',fontWeight:'bold',fontSize:'16px'}}>Sessions completed today: {sessions} 🎯</p>
        <p style={{color:'#555',fontSize:'13px',marginTop:'4px'}}>4 sessions = 1 full study block. You got this Abena!</p>
      </div>
    </div>
  );
}
export default Pomodoro;

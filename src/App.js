import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi I'm Sparkle! 👋</h1>
        <p>Full Stack AI Engineer in Training</p>
        <p>Cybersecurity Student · Builder · Creator</p>
        <div style={{marginTop: '30px'}}>
          <p>Days coded: {count}</p>
          <button 
            onClick={() => setCount(count + 1)}
            style={{padding: '10px 20px', fontSize: '16px', 
            cursor: 'pointer', marginTop: '10px',
            background: '#61dafb', border: 'none', borderRadius: '8px'}}>
            + Add Day
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;




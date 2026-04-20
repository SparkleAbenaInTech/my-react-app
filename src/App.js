import './App.css';
import { useState } from 'react';
import Header from './Header';
import Projects from './Projects';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <div style={{
        maxWidth: '800px',
        margin: '40px auto',
        padding: '0 20px',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '10px',
          padding: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          marginBottom: '20px'
        }}>
          <h2 style={{ color: '#6200ea', marginBottom: '10px' }}>
            Hi I'm Sparkle! 👋
          </h2>
          <p style={{ color: '#555', lineHeight: '1.7' }}>
            Full Stack AI Engineer in Training · Cybersecurity Student · Builder · Creator
          </p>
        </div>

        <div style={{
          background: 'white',
          borderRadius: '10px',
          padding: '30px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#6200ea', marginBottom: '15px' }}>
            My Coding Streak 🔥
          </h3>
          <p style={{ fontSize: '48px', fontWeight: 'bold', color: '#333' }}>
            {count}
          </p>
          <p style={{ color: '#555', marginBottom: '15px' }}>days coded</p>
          <button
            onClick={() => setCount(count + 1)}
            style={{
              padding: '12px 30px',
              fontSize: '16px',
              cursor: 'pointer',
              background: '#6200ea',
              color: 'white',
              border: 'none',
              borderRadius: '8px'
            }}>
            + Add Day 💪
          </button>
        </div>
        <Projects />
      </div>
    </div>
  );
}

export default App;




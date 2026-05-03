import { useState } from 'react';

function ColorPalette() {
  const [colors, setColors] = useState(['#6200ea','#0066cc','#28a745','#ffc107','#dc3545']);
  const [copied, setCopied] = useState('');

  function randomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
  }

  function generate() {
    setColors([randomColor(),randomColor(),randomColor(),randomColor(),randomColor()]);
  }

  function copyColor(color) {
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(''), 2000);
  }

  return (
    <div style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px'}}>Color Palette Generator</h2>
      <button onClick={generate} style={{background:'#6200ea',color:'white',border:'none',padding:'12px 30px',borderRadius:'8px',fontSize:'15px',cursor:'pointer',width:'100%',marginBottom:'20px'}}>Generate New Palette</button>
      <div style={{display:'grid',gridTemplateColumns:'repeat(5, 1fr)',gap:'10px'}}>
        {colors.map((color, i) => (
          <div key={i} onClick={() => copyColor(color)} style={{cursor:'pointer',borderRadius:'10px',overflow:'hidden',boxShadow:'0 2px 8px rgba(0,0,0,0.15)'}}>
            <div style={{height:'120px',background:color}}></div>
            <div style={{padding:'8px',textAlign:'center',background:'#f8f8f8'}}>
              <p style={{fontSize:'12px',fontWeight:'bold',color:'#333',fontFamily:'monospace'}}>{color}</p>
              <p style={{fontSize:'11px',color:'#555'}}>{copied === color ? 'Copied!' : 'Click to copy'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ColorPalette;

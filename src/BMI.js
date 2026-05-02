import { useState } from 'react';

function BMI() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  function calculate() {
    if (!height || !weight) return;
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const result = (w / (h * h)).toFixed(1);
    setBmi(result);
    if (result < 18.5) setCategory('Underweight');
    else if (result < 25) setCategory('Normal weight');
    else if (result < 30) setCategory('Overweight');
    else setCategory('Obese');
  }

  function getColor() {
    if (!bmi) return '#6200ea';
    if (bmi < 18.5) return '#17a2b8';
    if (bmi < 25) return '#28a745';
    if (bmi < 30) return '#ffc107';
    return '#dc3545';
  }

  return (
    <div style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px'}}>BMI Calculator</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px',marginBottom:'20px'}}>
        <div>
          <label style={{color:'#555',fontSize:'14px',display:'block',marginBottom:'6px'}}>Height (cm)</label>
          <input type="number" placeholder="e.g. 165" value={height} onChange={e => setHeight(e.target.value)} style={{width:'100%',padding:'12px',border:'2px solid #ddd',borderRadius:'8px',fontSize:'15px',outline:'none'}}/>
        </div>
        <div>
          <label style={{color:'#555',fontSize:'14px',display:'block',marginBottom:'6px'}}>Weight (kg)</label>
          <input type="number" placeholder="e.g. 65" value={weight} onChange={e => setWeight(e.target.value)} style={{width:'100%',padding:'12px',border:'2px solid #ddd',borderRadius:'8px',fontSize:'15px',outline:'none'}}/>
        </div>
      </div>
      <button onClick={calculate} style={{background:'#6200ea',color:'white',border:'none',padding:'12px 30px',borderRadius:'8px',fontSize:'15px',cursor:'pointer',width:'100%',marginBottom:'20px'}}>Calculate BMI</button>
      {bmi && (
        <div style={{textAlign:'center',padding:'20px',background:'#f8f4ff',borderRadius:'10px'}}>
          <p style={{fontSize:'14px',color:'#555',marginBottom:'8px'}}>Your BMI</p>
          <p style={{fontSize:'56px',fontWeight:'bold',color:getColor(),marginBottom:'8px'}}>{bmi}</p>
          <p style={{fontSize:'20px',fontWeight:'500',color:getColor()}}>{category}</p>
        </div>
      )}
    </div>
  );
}
export default BMI;

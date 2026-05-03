import { useState } from 'react';

function Currency() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const currencies = ['USD','EUR','GBP','JPY','CAD','AUD','CHF','CNY','INR','MXN','BRL','NGN','GHS'];

  function convert() {
    if (!amount) return;
    setLoading(true);
    fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
      .then(res => res.json())
      .then(data => {
        setResult(data.rates[to]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  return (
    <div style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px'}}>Currency Converter</h2>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'12px',marginBottom:'20px'}}>
        <div>
          <label style={{color:'#555',fontSize:'14px',display:'block',marginBottom:'6px'}}>Amount</label>
          <input type="number" placeholder="Enter amount" value={amount} onChange={e => setAmount(e.target.value)} style={{width:'100%',padding:'12px',border:'2px solid #ddd',borderRadius:'8px',fontSize:'15px',outline:'none'}}/>
        </div>
        <div>
          <label style={{color:'#555',fontSize:'14px',display:'block',marginBottom:'6px'}}>From</label>
          <select value={from} onChange={e => setFrom(e.target.value)} style={{width:'100%',padding:'12px',border:'2px solid #ddd',borderRadius:'8px',fontSize:'15px',outline:'none'}}>
            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label style={{color:'#555',fontSize:'14px',display:'block',marginBottom:'6px'}}>To</label>
          <select value={to} onChange={e => setTo(e.target.value)} style={{width:'100%',padding:'12px',border:'2px solid #ddd',borderRadius:'8px',fontSize:'15px',outline:'none'}}>
            {currencies.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
      <button onClick={convert} style={{background:'#6200ea',color:'white',border:'none',padding:'12px 30px',borderRadius:'8px',fontSize:'15px',cursor:'pointer',width:'100%',marginBottom:'20px'}}>Convert</button>
      {loading && <p style={{color:'#6200ea',textAlign:'center'}}>Converting...</p>}
      {result && !loading && (
        <div style={{textAlign:'center',padding:'20px',background:'#f8f4ff',borderRadius:'10px'}}>
          <p style={{fontSize:'16px',color:'#555',marginBottom:'8px'}}>{amount} {from} equals</p>
          <p style={{fontSize:'48px',fontWeight:'bold',color:'#6200ea',marginBottom:'8px'}}>{result.toFixed(2)}</p>
          <p style={{fontSize:'20px',color:'#333'}}>{to}</p>
        </div>
      )}
    </div>
  );
}
export default Currency;

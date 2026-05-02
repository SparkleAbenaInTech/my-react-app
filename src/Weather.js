import { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function getWeather() {
    if (!city) return;
    setLoading(true);
    setError('');
    fetch(`https://wttr.in/${city}?format=j1`)
      .then(res => res.json())
      .then(data => {
        const current = data.current_condition[0];
        setWeather({
          temp: current.temp_F,
          feels: current.FeelsLikeF,
          desc: current.weatherDesc[0].value,
          humidity: current.humidity,
          wind: current.windspeedMiles
        });
        setLoading(false);
      })
      .catch(() => {
        setError('City not found. Try again!');
        setLoading(false);
      });
  }

  return (
    <div style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px'}}>Weather App</h2>
      <div style={{display:'flex',gap:'10px',marginBottom:'20px'}}>
        <input type="text" placeholder="Enter city name..." value={city} onChange={e => setCity(e.target.value)} onKeyPress={e => e.key === 'Enter' && getWeather()} style={{flex:1,padding:'12px',border:'2px solid #ddd',borderRadius:'8px',fontSize:'15px',outline:'none'}}/>
        <button onClick={getWeather} style={{background:'#6200ea',color:'white',border:'none',padding:'12px 24px',borderRadius:'8px',fontSize:'15px',cursor:'pointer'}}>Search</button>
      </div>
      {loading && <p style={{color:'#6200ea'}}>Loading weather...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}
      {weather && (
        <div style={{textAlign:'center',padding:'20px',background:'#f8f4ff',borderRadius:'10px'}}>
          <h3 style={{color:'#333',fontSize:'24px',marginBottom:'10px'}}>{city}</h3>
          <p style={{fontSize:'48px',fontWeight:'bold',color:'#6200ea',marginBottom:'10px'}}>{weather.temp}F</p>
          <p style={{color:'#555',fontSize:'18px',marginBottom:'20px'}}>{weather.desc}</p>
          <div style={{display:'flex',justifyContent:'center',gap:'30px'}}>
            <div><p style={{color:'#6200ea',fontWeight:'bold'}}>Feels Like</p><p style={{color:'#333'}}>{weather.feels}F</p></div>
            <div><p style={{color:'#6200ea',fontWeight:'bold'}}>Humidity</p><p style={{color:'#333'}}>{weather.humidity}%</p></div>
            <div><p style={{color:'#6200ea',fontWeight:'bold'}}>Wind</p><p style={{color:'#333'}}>{weather.wind} mph</p></div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Weather;

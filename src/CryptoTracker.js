import { useState, useEffect } from 'react';

function CryptoTracker() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1')
      .then(res => res.json())
      .then(data => {
        setCoins(data);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div id="crypto" style={{marginTop:'20px'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px'}}>Live Crypto Prices</h2>
      {loading ? (
        <p style={{color:'#555'}}>Loading prices...</p>
      ) : (
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:'16px'}}>
          {coins.map(coin => (
            <div key={coin.id} style={{background:'white',borderRadius:'10px',padding:'20px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',textAlign:'center',borderTop:'3px solid #6200ea'}}>
              <img src={coin.image} alt={coin.name} style={{width:'40px',height:'40px',marginBottom:'10px'}}/>
              <h3 style={{color:'#333',fontSize:'16px',marginBottom:'4px'}}>{coin.name}</h3>
              <p style={{color:'#6200ea',fontSize:'20px',fontWeight:'bold',marginBottom:'4px'}}>${coin.current_price.toLocaleString()}</p>
              <p style={{color: coin.price_change_percentage_24h > 0 ? '#28a745' : '#dc3545',fontSize:'13px'}}>
                {coin.price_change_percentage_24h > 0 ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CryptoTracker;

import { useState, useEffect } from 'react';

function JokeGenerator() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);

  function getJoke() {
    setLoading(true);
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(res => res.json())
      .then(data => {
        setJoke(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }

  function saveFavorite() {
    if (!joke) return;
    const newFavs = [...favorites, joke];
    setFavorites(newFavs);
  }

  useEffect(() => { getJoke(); }, []);

  return (
    <div style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px'}}>Joke Generator 😂</h2>
      {loading && <p style={{color:'#6200ea',textAlign:'center'}}>Loading joke...</p>}
      {joke && !loading && (
        <div style={{background:'#f8f4ff',borderRadius:'10px',padding:'24px',marginBottom:'20px',textAlign:'center'}}>
          <p style={{fontSize:'18px',fontWeight:'bold',color:'#333',marginBottom:'16px'}}>{joke.setup}</p>
          <p style={{fontSize:'16px',color:'#6200ea',fontStyle:'italic'}}>{joke.punchline} 😄</p>
        </div>
      )}
      <div style={{display:'flex',gap:'12px',marginBottom:'20px'}}>
        <button onClick={getJoke} style={{flex:1,background:'#6200ea',color:'white',border:'none',padding:'12px',borderRadius:'8px',fontSize:'15px',cursor:'pointer'}}>Next Joke</button>
        <button onClick={saveFavorite} style={{flex:1,background:'#28a745',color:'white',border:'none',padding:'12px',borderRadius:'8px',fontSize:'15px',cursor:'pointer'}}>Save Favorite</button>
      </div>
      {favorites.length > 0 && (
        <div>
          <h3 style={{color:'#6200ea',marginBottom:'10px'}}>Favorites ({favorites.length})</h3>
          {favorites.map((fav, i) => (
            <div key={i} style={{background:'#f8f4ff',borderLeft:'4px solid #6200ea',borderRadius:'8px',padding:'12px',marginBottom:'8px'}}>
              <p style={{color:'#333',fontWeight:'bold',marginBottom:'4px'}}>{fav.setup}</p>
              <p style={{color:'#6200ea',fontStyle:'italic'}}>{fav.punchline}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default JokeGenerator;

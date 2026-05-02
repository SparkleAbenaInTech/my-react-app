function Hero() {
  return (
    <div style={{background:'linear-gradient(135deg, #6200ea, #0066cc)',color:'white',textAlign:'center',padding:'80px 20px'}}>
      <h1 style={{fontSize:'48px',marginBottom:'16px'}}>Hi I am Abena!</h1>
      <h2 style={{fontSize:'22px',fontWeight:'400',marginBottom:'16px',opacity:'0.9'}}>Full Stack AI Engineer · Cybersecurity Student · Builder</h2>
      <p style={{fontSize:'16px',opacity:'0.8',maxWidth:'600px',margin:'0 auto 30px',lineHeight:'1.7'}}>I build AI-powered applications that solve real problems.</p>
      <div style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
        <a href="https://github.com/SparkleAbenaInTech" target="_blank" rel="noopener noreferrer" style={{background:'white',color:'#6200ea',padding:'12px 28px',borderRadius:'8px',textDecoration:'none',fontWeight:'bold'}}>View GitHub</a>
        <a href="https://SparkleAbenaInTech.github.io/web-projects" target="_blank" rel="noopener noreferrer" style={{background:'transparent',color:'white',padding:'12px 28px',borderRadius:'8px',textDecoration:'none',fontWeight:'bold',border:'2px solid white'}}>View Portfolio</a>
      </div>
    </div>
  );
}
export default Hero;

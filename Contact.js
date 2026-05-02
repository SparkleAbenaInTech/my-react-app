function Contact() {
  return (
    <div id="contact" style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px'}}>Lets Connect!</h2>
      <p style={{color:'#555',lineHeight:'1.7',marginBottom:'20px'}}>I am actively looking for opportunities in AI Engineering, Full Stack Development, and Technical Sales roles.</p>
      <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
        <a href="mailto:aapau01@icloud.com" style={{color:'#6200ea',textDecoration:'none',fontSize:'15px'}}>Email: aapau01@icloud.com</a>
        <a href="https://github.com/SparkleAbenaInTech" target="_blank" rel="noopener noreferrer" style={{color:'#6200ea',textDecoration:'none',fontSize:'15px'}}>GitHub: github.com/SparkleAbenaInTech</a>
        <a href="https://SparkleAbenaInTech.github.io/web-projects" target="_blank" rel="noopener noreferrer" style={{color:'#6200ea',textDecoration:'none',fontSize:'15px'}}>Portfolio: SparkleAbenaInTech.github.io/web-projects</a>
      </div>
      <div style={{marginTop:'24px',background:'#f8f4ff',borderLeft:'4px solid #6200ea',borderRadius:'8px',padding:'16px'}}>
        <p style={{color:'#6200ea',fontWeight:'bold',marginBottom:'6px'}}>Open to opportunities in:</p>
        <p style={{color:'#555',fontSize:'14px',lineHeight:'1.8'}}>Junior AI Engineer - Full Stack Developer - AI Solutions Engineer - Technical Account Executive</p>
      </div>
    </div>
  );
}
export default Contact;

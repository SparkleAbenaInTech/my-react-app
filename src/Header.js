function Header() {
  return (
    <header style={{
      background: 'linear-gradient(135deg, #6200ea, #0066cc)',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <h1 style={{ color: 'white', fontSize: '24px' }}>
        SparkleAbenaInTech
      </h1>
      <nav>
        <a href="#about" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>About</a>
        <a href="#projects" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>Projects</a>
        <a href="#contact" style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;

function Projects() {
  const projects = [
    {
      name: "Password Strength Checker",
      tech: "JavaScript · HTML · CSS",
      description: "Real-time cybersecurity tool that evaluates password strength using regex pattern matching.",
      link: "https://SparkleAbenaInTech.github.io/web-projects/password-checker.html"
    },
    {
      name: "AI Quote Generator",
      tech: "JavaScript · HTML · CSS",
      description: "Interactive web app with category-based quote retrieval and clipboard integration.",
      link: "https://SparkleAbenaInTech.github.io/web-projects/quote-generator.html"
    },
    {
      name: "Tech Quiz App",
      tech: "JavaScript · HTML · CSS",
      description: "Full interactive quiz with real-time scoring and answer validation.",
      link: "https://SparkleAbenaInTech.github.io/web-projects/quiz.html"
    },
    {
      name: "Number Guessing Game",
      tech: "Python",
      description: "CLI game with random number generation, loop logic and try-counter tracking.",
      link: "https://github.com/SparkleAbenaInTech/python-projects"
    }
  ];

  return (
    <div id="projects" style={{ marginTop: '20px' }}>
      <h2 style={{
        color: '#6200ea',
        marginBottom: '20px',
        borderBottom: '2px solid #6200ea',
        paddingBottom: '10px'
      }}>
        My Projects 🚀
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px'
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            background: 'white',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            borderTop: '3px solid #6200ea'
          }}>
            <h3 style={{ color: '#333', marginBottom: '6px', fontSize: '16px' }}>
              {project.name}
            </h3>
            <p style={{ color: '#6200ea', fontSize: '12px', marginBottom: '10px' }}>
              {project.tech}
            </p>
            <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.6', marginBottom: '14px' }}>
              {project.description}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{
              background: '#6200ea',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '13px'
            }}>
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
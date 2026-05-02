import { useState, useEffect } from 'react';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('notes') || '[]');
    setNotes(saved);
  }, []);

  function addNote() {
    if (!input.trim()) return;
    const newNotes = [...notes, {id: Date.now(), text: input}];
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
    setInput('');
  }

  function deleteNote(id) {
    const newNotes = notes.filter(n => n.id !== id);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  }

  return (
    <div style={{background:'white',borderRadius:'10px',padding:'30px',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',marginTop:'20px'}}>
      <h2 style={{color:'#6200ea',marginBottom:'20px',borderBottom:'2px solid #6200ea',paddingBottom:'10px'}}>My Notes</h2>
      <div style={{display:'flex',gap:'10px',marginBottom:'20px'}}>
        <input type="text" placeholder="Add a note..." value={input} onChange={e => setInput(e.target.value)} onKeyPress={e => e.key === 'Enter' && addNote()} style={{flex:1,padding:'12px',border:'2px solid #ddd',borderRadius:'8px',fontSize:'15px',outline:'none'}}/>
        <button onClick={addNote} style={{background:'#6200ea',color:'white',border:'none',padding:'12px 24px',borderRadius:'8px',fontSize:'15px',cursor:'pointer'}}>Add</button>
      </div>
      {notes.length === 0 && <p style={{color:'#555',textAlign:'center'}}>No notes yet. Add your first one!</p>}
      <div style={{display:'flex',flexDirection:'column',gap:'10px'}}>
        {notes.map(note => (
          <div key={note.id} style={{background:'#f8f4ff',borderLeft:'4px solid #6200ea',borderRadius:'8px',padding:'14px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <p style={{color:'#333',fontSize:'15px',flex:1}}>{note.text}</p>
            <button onClick={() => deleteNote(note.id)} style={{background:'#dc3545',color:'white',border:'none',padding:'6px 12px',borderRadius:'6px',cursor:'pointer',fontSize:'13px',marginLeft:'10px'}}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Notes;

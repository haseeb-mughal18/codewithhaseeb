import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', msg: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    alert(`Transmission encrypted! Thanks ${form.name}.`);
    setForm({ name: '', email: '', msg: '' });
  };

  return (
    <section id="contact">
      <div className="section-header">
        {/* <span className="section-num">03 </span> */}
        <h2 className="section-title">Reach Me Out</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Have a complex system build requirement?</h3>
          <p>Let's collaborate on developing cutting-edge native experiences or reactive structural blueprints.</p>
        </div>
        <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label>Identification</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={form.name} 
              onChange={e => setForm({...form, name: e.target.value})} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Communication Routing</label>
            <input 
              type="email" 
              placeholder="Your Email" 
              value={form.email} 
              onChange={e => setForm({...form, email: e.target.value})} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Payload Specification</label>
            <textarea 
              rows="5" 
              placeholder="Project goals, architectural requirements..." 
              value={form.msg} 
              onChange={e => setForm({...form, msg: e.target.value})} 
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-primary" style={{ marginTop: '10px' }}>Transmit Payload</button>
        </form>
      </div>
    </section>
  );
}

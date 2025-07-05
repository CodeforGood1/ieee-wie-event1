import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container slide-up">
        <h1 className="title">IEEE WIE Day 2025</h1>
        <p className="intro">Organized by <strong>IEEE Women in Engineering (WIE)</strong><br/>Rajalakshmi Engineering College</p>
        
        <section className="section">
          <p>
            Join us for a special online event featuring speakers from academia and industry. 
            Get inspired by the mission of IEEE WIE and explore career potential in cybersecurity.
          </p>
        </section>

        <section className="event-info fade-in">
          <h2>🗓️ Event Details</h2>
          <p><strong>Date:</strong> Monday, 7th July 2025</p>
          <p><strong>Time:</strong> 11:30 a.m. – 1:00 p.m.</p>
          <p><strong>Mode:</strong> Online</p>
          <p><strong>Register:</strong> <a href="https://forms.gle/JyFcKf3Ve3Bfjxgp9" target="_blank" rel="noreferrer">Click here</a></p>
        </section>

        <section className="highlight">
          <h2>📌 E-Certificates for all registered participants</h2>
        </section>

        <section className="schedule fade-in">
          <h2>🕐 Session Schedule</h2>
          <div className="session">
            <h3>11:30 a.m. – 12:00 p.m.</h3>
            <p><strong>Dr. Vasanthi</strong><br/>
            Associate Professor, Dept. of ECE, SRM IST, Kattankulathur</p>
            <p><u>Topic:</u> Bridging Gaps, Building Futures: The Mission of IEEE WIE</p>
          </div>

          <div className="session">
            <h3>12:00 p.m. – 1:00 p.m.</h3>
            <p><strong>Mr. Lakshmi Narasimhan</strong><br/>
            VP, Intellect Design Arena Ltd</p>
            <p><u>Topic:</u> Opportunities in Cyber as a Career</p>
            <ul>
              <li>Importance of cybersecurity today</li>
              <li>Real-world incident breakdowns</li>
              <li>Ethical hacking, OSINT tools, threat intel</li>
              <li>Top certs: CEH, CRISC, ITIL</li>
              <li>Interactive Q&A session</li>
            </ul>
          </div>
        </section>

        <section className="closing fade-in">
          <p>All students are encouraged to attend this enriching event.<br/>
          Explore career paths, ask questions, and be part of the future.</p>

          <p className="signature">Warm regards,<br/>
          <strong>IEEE WIE Affinity Group</strong><br/>
          Rajalakshmi Engineering College</p>
        </section>
      </div>
    </div>
  );
}

export default App;

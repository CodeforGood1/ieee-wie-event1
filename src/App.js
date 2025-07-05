import React from 'react';
import './App.css';
import MatrixBackground from './MatrixBackground';

function App() {
  return (
    <div className="App">
      <MatrixBackground />
      <div className="container">
        <h2>Dear Students,</h2>
        <p>
          Greetings from the <strong>IEEE Women in Engineering (WIE)</strong> Affinity Group of Rajalakshmi Engineering College.
        </p>
        <p>
          As part of the IEEE WIE Day 2025 celebrations, we are pleased to invite you to a special online event featuring
          distinguished speakers from both academia and industry. This session aims to inspire students by highlighting the mission
          of IEEE Women in Engineering and exploring the vast career potential in the field of Cybersecurity.
        </p>
        <p>
          <strong>Date:</strong> Monday, 7th July 2025<br />
          <strong>Time:</strong> 11:30 a.m. – 1:00 p.m.<br />
          <strong>Mode:</strong> Online<br />
          <strong>Registration:</strong>{' '}
          <a href="https://forms.gle/JyFcKf3Ve3Bfjxgp9" target="_blank" rel="noreferrer">
            Register here
          </a>
        </p>

        <h3>📌 E-Certificates will be provided to all registered participants.</h3>

        <h3>Session Schedule</h3>
        <ul>
          <li>
            <strong>11:30 a.m. – 12:00 p.m.</strong>
            <br />
            <em>Dr. Vasanthi</em>
            <br />
            Associate Professor, Department of ECE, SRM Institute of Science and Technology, Kattankulathur
            <br />
            <u>Topic:</u> Bridging Gaps, Building Futures: The Mission of IEEE Women in Engineering
          </li>
          <br />
          <li>
            <strong>12:00 p.m. – 1:00 p.m.</strong>
            <br />
            <em>Mr. Lakshmi Narasimhan</em>
            <br />
            Vice President, Intellect Design Arena Ltd
            <br />
            <u>Topic:</u> Opportunities in Cyber as a Career
            <ul>
              <li>The growing significance of cybersecurity</li>
              <li>Real-world cyber incidents and their impact</li>
              <li>Insights into ethical hacking, OSINT tools, and threat intelligence</li>
              <li>Emerging career paths, required skill sets, and top certifications (CEH, CRISC, ITIL)</li>
              <li>Interactive Q&A with the speaker</li>
            </ul>
          </li>
        </ul>

        <p>
          We encourage all students from various departments to take part in this insightful program. Whether you are exploring
          career options or simply wish to stay informed about today’s most critical tech domains, this session will be highly
          valuable.
        </p>

        <p>
          Warm regards,
          <br />
          <strong>IEEE Women in Engineering (WIE) Affinity Group</strong>
          <br />
          Rajalakshmi Engineering College
        </p>
      </div>
    </div>
  );
}

export default App;

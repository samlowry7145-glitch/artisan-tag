export default function App() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <div className="eyebrow">Handmade in Pakistan</div>
          <h1>See your piece being made.</h1>
          <p>
            Watch as Ahmed paints 
            this Multani pottery and discover more about the piece below. 
          </p>
        </section>
        <section className="card video-card">
          <iframe 
  width="100%" 
  height="300" 
  src="https://www.youtube.com/embed/Z4voCQ5EEds?si=9IEjsfFBDHnpAOv0" 
  frameBorder="0" 
  allowFullScreen>
</iframe>
        </section>
        <section className="details">
          <div className="eyebrow">Piece Details</div>
          <div className="detail-group">
            <span>Piece No.</span>
            <h2>0142</h2>
          </div>
          <div className="detail-group">
            <span>Made by</span>
            <p>Ahmed Raza</p>
          </div>
          <div className="detail-group">
            <span>Technique</span>
            <p>Kashigari</p>
          </div>
          <div className="detail-group">
            <span>Hours Worked</span>
            <p>6.5 hours</p>
          </div>
          <div className="detail-group">
            <span>Origin</span>
            <p>Multan, Pakistan</p>
          </div>
        </section>

        <section className="text-section">
          <div className="eyebrow">Why it matters</div>
          <p>
            We connect each piece directly with the artisan who made it
            so you can feel closer to the creator and thier craft.
          </p>
        </section>

        <section className="card workshop-card">
          <div className="eyebrow">Join a live workshop session</div>
          <h2>May 12 · 9:00 AM EST</h2>
          <p>
            Join us for a live demonstration with the artisan, including Q&amp;A
            about technique, process, and material choices.
          </p>
          <div className="button-row">
            <button className="primary-button">Reserve a spot</button>
            <button className="secondary-button">Add to calendar</button>
          </div>
        </section>

        <section className="text-section">
          <div className="eyebrow">How this works</div>
          <ol>
            <li>You discover the piece in-store or online.</li>
            <li>You scan the tag and watch the artisan creating that exact piece.</li>
            <li>You learn who made it and how long it took to create.</li>
            <li>You join a live session and go even deeper, learning about material, technique, and history.</li>
            <li>You connect deeply with the piece and directly support the artisan who crafted it. </li>
          </ol>
        </section>
      </div>
    </div>
  );
}

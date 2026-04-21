export default function App() {
  return (
    <div className="page">
      <div className="container">
        <section className="hero">
          <div className="eyebrow">Handmade in Pakistan</div>
          <h1>See this piece being made.</h1>
          <p>
            A digital layer for artisan products that brings the maker, the
            process, and the story closer to the customer.
          </p>
        </section>

        <section className="card video-card">
          <div className="video-placeholder">
            <div className="eyebrow">Video Placeholder</div>
            <h2>Watch the stitch, brushstroke, or handwork that made this piece.</h2>
            <p>Replace this area with a real video later.</p>
          </div>
        </section>

        <section className="details">
          <div className="eyebrow">Piece Details</div>
          <div className="detail-group">
            <span>Piece No.</span>
            <h2>0142</h2>
          </div>
          <div className="detail-group">
            <span>Made by</span>
            <p>Ayesha Khan</p>
          </div>
          <div className="detail-group">
            <span>Technique</span>
            <p>Hand embroidery</p>
          </div>
          <div className="detail-group">
            <span>Hours Worked</span>
            <p>6.5 hours</p>
          </div>
          <div className="detail-group">
            <span>Origin</span>
            <p>Lahore, Pakistan</p>
          </div>
        </section>

        <section className="text-section">
          <div className="eyebrow">Why it matters</div>
          <p>
            Instead of relying on a generic certification, this product uses
            direct access to process and maker identity to build trust.
          </p>
        </section>

        <section className="card workshop-card">
          <div className="eyebrow">Join a live session</div>
          <h2>May 12 · 9:00 AM EST</h2>
          <p>
            A live virtual demonstration with the artisan, including Q&amp;A
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
            <li>Customer discovers the object in-store or online.</li>
            <li>They scan the tag and see the actual making process.</li>
            <li>They learn who made it and how long it took.</li>
            <li>They can join a live session and build trust through experience.</li>
          </ol>
        </section>
      </div>
    </div>
  );
}

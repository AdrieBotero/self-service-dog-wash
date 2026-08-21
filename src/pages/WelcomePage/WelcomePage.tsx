import "./WelcomePage.css"
import { Clock, Tag } from "lucide-react";

function WelcomePage() {
  return (

    <section className="welcome-page">
      <div className="welcome-hero">
        <h1>Welcome!</h1>
        <p className="welcome-label">- Self-Service Dog Wash -</p>
        <p className="description">
          Everything you need for a clean, comfortable wash.
        </p>
      </div>

      <div className="session-info">
        <div className="info-card">
          <Clock
            size={42} 
            color="#0f9fa5"
            strokeWidth={2} 
            />
          <div className="info-card-content">
            <p>Wash Time</p>
            <strong>30</strong>
            <span>Minutes</span>

          </div>

        </div>

        <div className="info-card">
          <Tag
          size={42} 
            color="#0f9fa5"
            strokeWidth={2} />
          <div className="info-card-content">
            <p>Price</p>
            <strong>$25.00</strong>

          </div>

        </div>
      </div>

      <button type="button">Start Wash</button>

      <p className="start-instruction">
        Tap Start Wash to begin
      </p>
    </section>
  );
}

export default WelcomePage;
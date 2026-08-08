import React from 'react';

const KioskLayout: React.FC = () => {
  return (
    <div className="kiosk-layout">
      <aside className="kiosk-sidebar">
        <div className="brand">
          <span className="brand-icon">🐾</span>
          <span className="brand-text">Bark & Bath</span>
        </div>

        <nav className="kiosk-nav">
          <a href="#" className="nav-link active">
            <span className="nav-icon">🏠</span>
            <span>Home</span>
          </a>
          <a href="#" className="nav-link">
            <span className="nav-icon">🛁</span>
            <span>Wash Stations</span>
          </a>
          <a href="#" className="nav-link">
            <span className="nav-icon">🧾</span>
            <span>Current Order</span>
          </a>
          <a href="#" className="nav-link">
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </a>
        </nav>

        <div className="kiosk-status">
          <span className="status-dot" />
          <span>Online</span>
        </div>
      </aside>

      <main className="kiosk-content">
        <header className="kiosk-header">
          <div>
            <p className="eyebrow">Self Service Dog Wash</p>
            <h1>Welcome, Dog Parent</h1>
          </div>
          <button className="primary-button">Start Wash</button>
        </header>

        <section className="kiosk-panels">
          <article className="panel panel-feature">
            <div>
              <span className="panel-label">Wash Package</span>
              <h2>Signature Spa Bath</h2>
              <p className="panel-copy">
                Gentle shampoo, warm rinse, drying, comb-out, and paw care.
              </p>
              <div className="meta-row">
                <span className="price">$24.00</span>
                <span className="duration">20 min</span>
              </div>
              <button className="primary-button wide-button">Choose Package</button>
            </div>
            <div className="image-card">
              <span>🐕</span>
            </div>
          </article>

          <article className="panel panel-small">
            <span className="panel-label">Station</span>
            <h3>Bay 02</h3>
            <div className="station-status">
              <span className="status-dot" />
              <span>Ready</span>
            </div>
          </article>

          <article className="panel panel-small">
            <span className="panel-label">Queue</span>
            <h3>03 Guests</h3>
            <div className="queue-list">
              <span className="queue-item">#104</span>
              <span className="queue-item">#105</span>
              <span className="queue-item">#106</span>
            </div>
          </article>
        </section>

        <section className="kiosk-actions">
          <button className="secondary-button">View Pricing</button>
          <button className="secondary-button">Check-in</button>
          <button className="danger-button">Emergency Stop</button>
        </section>
      </main>
    </div>
  );
};

export default KioskLayout;

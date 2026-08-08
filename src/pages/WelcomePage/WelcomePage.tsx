function welcomePage() {
  return (
    <main className="welcome-page">
      <section className="welcome-card">
        <p className="station-label">Station 01</p>

        <h1>Self-Service Dog Wash</h1>

        <p className="session-details">
          30 Minute Wash Session
        </p>

        <p className="price">
          $25.00
        </p>

        <p className="description">
          Give your dog a clean, comfortable wash with professional-grade
          equipment.
        </p>

        <button type="button">
          Start Wash
        </button>
      </section>
    </main>
  );
}

export default welcomePage;
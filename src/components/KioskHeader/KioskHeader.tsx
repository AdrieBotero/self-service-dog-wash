function KioskHeader() {
    return (
        <header className="kiosk-header">
            <div className="kiosk-brand">
                <div className="brand-logo" aria-hidden="true">
                    🐶
                </div>

                <div className="brand-content">
                    <h2 className="brand-name">PupWash Station</h2>
                    <p className="brand-tagline">Clean dog. Happy dog.</p>
                </div>
            </div>

            <div className="kiosk-status">
                <div className="status-chip">
                    <span aria-hidden="true">💧</span>
                    <span>72°F</span>
                </div>

                <div className="status-chip">
                    <span aria-hidden="true">🕒</span>
                    <span>2:15 PM</span>
                </div>
            </div>
        </header>
    );
}
export default KioskHeader
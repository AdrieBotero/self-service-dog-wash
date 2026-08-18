import "./KioskFooter.css"

function KioskFooter() {
    return (
        <footer className="kiosk-footer">
            <div className="kiosk-safety-warning">
                <p>Safety First</p>
            </div>

            <div className="kiosk-footer-help-button">
                <button type="button">Need Help?</button>
            </div>


        </footer>);
}
export default KioskFooter
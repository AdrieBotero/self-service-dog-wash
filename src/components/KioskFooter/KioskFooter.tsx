import "./KioskFooter.css"
import { Shield } from "lucide-react";

function KioskFooter() {
    return (
        <footer className="kiosk-footer">
            <div className="kiosk-safety-warning">
                <Shield size={48} strokeWidth={2} />
                <div className="safety-text">
                    <h2>Safety First</h2>
                    <p>Tub door must be closed</p>
                </div>
            </div>

            <div className="kiosk-footer-help-button">
                <button type="button">Need Help?</button>
            </div>


        </footer>);
}
export default KioskFooter
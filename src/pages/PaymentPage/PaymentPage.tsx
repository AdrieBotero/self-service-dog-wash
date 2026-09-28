import { KIOSK_ROUTES } from "../../navidation/routes";
import { useKioskNavigation } from "../../navidation/useKioskNavigation";
import "./PaymentPage.css";

function PaymentPage() {

    const { goTo } = useKioskNavigation();
    
      const handlePaymentBackButton = () => {
        goTo(KIOSK_ROUTES.WELCOME);
      };
    
    return (
        <section className="payment-page">
            <h1>Payment</h1>

            <p>30 Minute Wash</p>
            <p>$25.00</p>

            <div className="payment-terminal">
                <p>Tap, Insert, or Swipe Card</p>
            </div>

            <button type="button"
                onClick={handlePaymentBackButton}
                className="payment-back-button"
            >
                Back
            </button>
        </section>
    );
}

export default PaymentPage;
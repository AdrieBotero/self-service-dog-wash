import { KIOSK_ROUTES } from "../../navidation/routes";
import { useKioskNavigation } from "../../navidation/useKioskNavigation";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../../store/store";

import "./PaymentPage.css";
import { paymentStarted } from "../../store/paymentSlice";

function PaymentPage() {
    const paymentStatus = useSelector((state: RootState) => state.payment.status);

    const dispatch = useDispatch();
    const { goTo } = useKioskNavigation();

    const handlePaymentBackButton = () => {
        goTo(KIOSK_ROUTES.WELCOME);
    };

    const handlePayment = () => {
        dispatch(paymentStarted());
    }

    return (
        <section className="payment-page">
            <h1>Payment</h1>

            <p>30 Minute Wash</p>
            <p>$25.00</p>

            <div className="payment-terminal"
            onClick={handlePayment}>
                <p>Tap, Insert, or Swipe Card</p>
                <p>Payment status: {paymentStatus}</p>
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
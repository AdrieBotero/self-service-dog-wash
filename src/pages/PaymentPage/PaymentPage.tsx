import { KIOSK_ROUTES } from "../../navidation/routes";
import { useKioskNavigation } from "../../navidation/useKioskNavigation";
import { useDispatch, useSelector } from "react-redux";

import type { RootState } from "../../store/store";
import { useEffect } from "react";

import "./PaymentPage.css";
import { paymentStarted, paymentApproved, paymentDeclined } from "../../store/paymentSlice";
import { processPayment } from "../../services/paymentService";

function PaymentPage() {
    const paymentStatus = useSelector((state: RootState) => state.payment.status);
    const isPaymentDisabled = paymentStatus === "processing" || paymentStatus === "approved";

    const dispatch = useDispatch();
    const { goTo } = useKioskNavigation();

    const handlePaymentBackButton = () => {
        goTo(KIOSK_ROUTES.WELCOME);
    };
    useEffect(() => {
        if (paymentStatus === "approved") {
            goTo(KIOSK_ROUTES.WASH);
        }
    }, [paymentStatus]);

    const handlePayment = async () => {
        dispatch(paymentStarted());
        const paymentResponse = await processPayment();
        if (paymentResponse.status === "approved") {
            dispatch(paymentApproved(paymentResponse.transactionId));
        } else {
            dispatch(paymentDeclined());
        }

        console.log(paymentResponse);
    }

    const getPaymentMessage = () => {
        if (paymentStatus === 'processing') {
            return 'Processing Payment...';

        }
        if (paymentStatus === 'approved') {
            return 'Payment Approved ✓';

        }
        return 'Tap, Insert, or Swipe Card';
    }

    return (
        <section className="payment-page">
            <h1>Payment</h1>

            <p>30 Minute Wash</p>
            <p>$25.00</p>

            <button className="payment-terminal"
                onClick={handlePayment}
                disabled={isPaymentDisabled}
            >
                {paymentStatus === 'declined' && (<p>Payment Declined - Please Try Again</p>)}
                <p>{getPaymentMessage()}</p>
                {paymentStatus !== 'idle' && (<p>Payment status: {paymentStatus}</p>)}

            </button>

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
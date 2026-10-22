import { WashControl } from "../../components/WashControl/WashControl";

export function WashingSessionPage() {

    return (
        <section className="washing-session">
            <div className="washing-session__top">
                <div className="washing-session__timer">
                    <p>WASH SESSION ACTIVE</p>

                    <h1>30:00</h1>

                    <p>Time Remaining</p>
                </div>

                <div className="washing-session__details">
                    <h2>Station 01</h2>

                    <p>30 Minute Wash Session</p>
                    <p>$25.00</p>
                    <p>Paid • Enjoy your wash!</p>
                </div>
            </div>

            <div className="washing-session__controls">
                <WashControl label="Soap" />
                <WashControl label="Rinse" />
                <WashControl label="Conditioner" />
                <WashControl label="Blow Dryer" />
                <WashControl label="Clean Tub" />
            </div>
        </section>
    );
}
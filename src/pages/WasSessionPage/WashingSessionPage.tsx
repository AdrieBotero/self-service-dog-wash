import type { WashMode } from "@pupwash/shared-types/src/washSession";
import { WashControl } from "../../components/WashControl/WashControl";
import { getWashSession, updateWashMode } from "../../services/washSessionService";
import { useDispatch, useSelector } from "react-redux";
import { setWashSession } from "../../store/washSessionSlice";

import type { RootState } from "../../store/store";
import { useEffect, useState } from "react";

export function WashingSessionPage() {

    const dispatch = useDispatch();
    const washSession = useSelector((state: RootState) => state.washSession.session);
    const endTime = washSession
        ? new Date(washSession.washEndedAt).getTime()
        : 0;

    const [currentTime, setCurrentTime] = useState(new Date().getTime());


    const timeRemainingInSeconds = Math.floor(
        (endTime - currentTime) / 1000
    );

    setInterval(() => { setCurrentTime() }, 1000);

    async function handleModeSelect(mode: WashMode): Promise<void> {
        const updatedSession = await updateWashMode(mode)
        dispatch(setWashSession(updatedSession))
        console.log(updatedSession);
    }

    useEffect(() => {
        console.log("WashingSessionPage rendered");
        async function loadWashSession() {
            const washSession = await getWashSession();
            dispatch(setWashSession(washSession))

        }

        loadWashSession();

    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().getTime());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

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
                <WashControl label="Soap" mode={"soap"} isActive={washSession?.activeMode === 'soap'} onSelectMode={handleModeSelect} />
                <WashControl label="Rinse" mode={"rinse"} isActive={washSession?.activeMode === 'rinse'} onSelectMode={handleModeSelect} />
                <WashControl label="Conditioner" mode={"conditioner"} isActive={washSession?.activeMode === 'conditioner'} onSelectMode={handleModeSelect} />
                <WashControl label="Blow Dryer" mode={"blowDryer"} isActive={washSession?.activeMode === 'blowDryer'} onSelectMode={handleModeSelect} />
                <WashControl label="Clean Tub" mode={"cleanTub"} isActive={washSession?.activeMode === 'cleanTub'} onSelectMode={handleModeSelect} />
            </div>
        </section>
    );
}
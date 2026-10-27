import type { WashMode, WashSession } from "@pupwash/shared-types";



export const getWashSession = async () : Promise<WashSession>=>{
    const response = await fetch("http://localhost:3000/api/wash-sessions/session_123");

    const washSession = await response.json();
    
    return washSession;
};

export const updateWashMode = async (activeMode: WashMode): Promise<WashSession> => {

    const response = await fetch(
        "http://localhost:3000/api/wash-sessions/session_123",
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                activeMode,
            }),
        }

    );
    const washSession = await response.json();

    return washSession;

};
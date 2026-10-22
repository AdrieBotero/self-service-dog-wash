export type WashMode = "soap" | "rinse" | "conditioner" | "blowDryer" | "cleanTub";

export type WashSessionStatus = "Active" | "Completed"

export interface WashSession {
    sessionId: string;
    stationId: string;
    status: WashSessionStatus;
    activeMode: WashMode;
    timeRemaining: number;
}
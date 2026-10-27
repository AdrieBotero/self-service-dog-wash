export type WashMode = "soap" | "rinse" | "conditioner" | "blowDryer" | "cleanTub";

export type WashSessionStatus = "active" | "completed"

export interface WashSession {
    sessionId: string;
    stationId: string;
    status: WashSessionStatus;
    activeMode: WashMode;
    washStartedAt: string;
    washEndedAt: string
}
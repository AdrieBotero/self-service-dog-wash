import express from "express";
import cors from "cors";

import { WashSession } from "@pupwash/shared-types";
const WASH_SESSION_DURATION_MINUTES = 1;


let washSession: WashSession | null = null;

const app = express();
app.use(cors());

app.use(express.json());

const PORT = 3000;
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok'
    });
});

app.post('/api/payments', async (req, res) => {
    console.log(req.body);
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const startedAt = new Date();
    const endsAt = new Date(startedAt.getTime() + WASH_SESSION_DURATION_MINUTES * 60 * 1000);

    washSession = {
        sessionId: "session_123",
        stationId: "station_01",
        status: "active",
        activeMode: "soap",
        washStartedAt: startedAt.toISOString(),
        washEndedAt: endsAt.toISOString()
    };
    res.json({
        status: 'approved',
        transactionId: 'txn_12345'
    });
});

app.get("/api/wash-sessions/:sessionId", (req, res) => {
    if (!washSession) {
        return res.status(404).json({ message: "Wash session does not exist or not created yet" })
    }
    res.json(washSession);
});

app.patch("/api/wash-sessions/:sessionId", (req, res) => {

    if (!washSession) {
        return res.status(404).json({
            message: "Wash session does not exist or not created yet",
        });
    }
    const { activeMode } = req.body;

    washSession.activeMode = activeMode;

    res.json(washSession);
});

app.patch("/api/wash-sessions/:sessionId/complete", (req, res) => {
    if (!washSession) {
        return res.status(404).json({
            message: "Wash session does not exist or not created yet",
        });
    }
    washSession.status = "completed";

    res.json(washSession);
});


app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`);
});
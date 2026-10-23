import express from "express";
import cors from "cors";

import { WashSession } from "@pupwash/shared-types";

const washSession: WashSession = {
    sessionId: "session_123",
    stationId: "station_01",
    status: "active",
    activeMode: "soap",
    timeRemaining: 1800,
};

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
    res.json({
        status: 'approved',
        transactionId: 'txn_12345'
    });
});
app.get("/api/wash-sessions/:sessionId", (req, res) => {
    res.json(washSession);
});

app.patch("/api/wash-sessions/:sessionId", (req, res) => {
    const { activeMode } = req.body;

    washSession.activeMode = activeMode;

    res.json(washSession);
});
app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`);
});
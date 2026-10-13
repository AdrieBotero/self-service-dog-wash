import express from "express";
import cors from "cors";

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
app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`);
});
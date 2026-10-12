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
app.post('/api/payments', (req, res) => {
    console.log(req.body);

    res.json({
        status: 'approved', 
        transactionId: 'txn_12345'
    });
});
app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`);
});
import express from "express";

const app = express();

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
        tratransactionId: 'txn_12345'
    });
});
app.listen(PORT, () => {
    console.log(`API server is running on port ${PORT}`);
});
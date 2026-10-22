export const processPayment = async () => {

    const response = await fetch("http://localhost:3000/api/payments", {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            amount: 25,
        }),
    });

    const data = await response.json();

    return data;

};
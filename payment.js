const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Payment = require("./modelsPayment");

exports.processPayment = async (req, res) => {
    try {
        console.log("Processing payment..."); // Debugging log
        const { amount, token, userId } = req.body;

        const charge = await stripe.charges.create({
            amount,
            currency: "usd",
            source: token,
            description: "E-commerce payment"
        });

        const payment = new Payment({
            userId,
            amount,
            currency: "usd",
            description: "E-commerce payment",
            status: charge.status
        });

        await payment.save();
        console.log("Payment saved:", payment); // Debugging log

        res.json({ message: "Payment successful", charge });
    } catch (error) {
        console.error("Payment processing error:", error); // Debugging log
        res.status(500).json({ error: error.message });
    }
};
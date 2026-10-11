import express from "express";

const app = express();

// Fixed: Changed app.route to app.get to handle the request properly
app.get('/', (req, res) => {
    res.json({ 'test': "test" });
});

app.listen(3000, () => {
    // Fixed typo: "Posrt" changed to "Port"
    console.log("Server running on port 3000");
});

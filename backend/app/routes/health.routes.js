module.exports = app => {
    app.get("/health", (req, res) => {
        res.json({ message: "Backend app is alive." });
    });
};

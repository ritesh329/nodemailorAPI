export const auth=(req, res, next) => {
    // Dummy authentication check
    const token = req.headers.authorization;
    if (token === "Ritesh8715318") {
        next();
    } else {
        res.status(401).json({ error: "Unauthorized" });
    }


}
export const areRequiredFieldsPresent = (req, res, next) => {
    const { category, price } = req.body;
    if (!price || !category) {
        res.status(400).json({ error: "All fields are required" });
        return;
    }
    next();
};

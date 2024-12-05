export const areYouLucky = (req, res, next) => {
    const randNum = Math.random();
    if (randNum > 0.5) {
        res.status(401).json({ error: "not lucky" });
        return;
    }
    else {
        next();
    }
};

export const isValidApiKey = (req, res, next) => {
  const apiKey = req.headers["api-key"];
  if (!apiKey || apiKey !== "12345") {
    return res.status(401).json({ error: "API key not correct" });
  }

  next();
};

import { Request, Response, NextFunction } from "express";

export const isValidApiKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["api-key"];
  if (!apiKey || apiKey !== "12345") {
    res.status(401).json({ error: "API key not correct" });
    return;
  }

  next();
};

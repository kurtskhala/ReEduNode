import { Request, Response, NextFunction } from "express";

export const areYouLucky = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const randNum = Math.random();
  if (randNum > 0.5) {
    res.status(401).json({ error: "not lucky" });
    return;
  } else {
    next();
  }
};

import { Request, Response, NextFunction } from "express";

export const areRequiredFieldsPresent = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category, price } = req.body;

  if (!price || !category) {
    res.status(400).json({ error: "All fields are required" });
    return;
  }

  next();
};

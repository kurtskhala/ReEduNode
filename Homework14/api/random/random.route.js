import { Router } from "express";
import { areYouLucky } from "../../midlewares/areYouLucky.midleware.js";

const randomRouter = Router();

randomRouter.get("/", areYouLucky, (req, res) => {
  res.send("lucky");
});

export default randomRouter;

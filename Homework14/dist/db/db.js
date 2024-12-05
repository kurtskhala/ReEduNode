var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import mongoose from "mongoose";
import "dotenv/config";
export const connectionToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!process.env.MONGODB_URL) {
            throw new Error("Environment variable MONGODB_URL is not defined");
        }
        yield mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to DB");
    }
    catch (e) {
        console.log(e, "can not connect");
    }
});

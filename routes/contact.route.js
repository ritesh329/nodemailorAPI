import express from "express";
import { sendMessage } from "../controllers/contact.controller.js";
import { auth } from "../middleware/isAuth.js";
const router = express.Router();

router.post("/", auth,sendMessage);

export default router;

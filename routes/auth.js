/* Route for authentication */
import express from "express";
import {
  login
} from "../controllers/auth/login.js";

// Middlewares
const router = express.Router();

router.route("/login").post(login);

export default router;

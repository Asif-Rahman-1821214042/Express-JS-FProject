import express from "express";
import * as tC from "../controllers/controllers.js";
const router =express.Router();

router.post("/cc",tC.cc);

router.get("/create",tC.greeting);

const JWT_SECRET = 'your_secret_key';

// Route to generate and return a JWT
router.get('/get-token', tC.token);



export default router;
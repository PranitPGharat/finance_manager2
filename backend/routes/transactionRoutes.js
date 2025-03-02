import express from "express";
import { addTransaction, getTransactions, deleteTransaction } from "../controllers/transactionController.js";

const router = express.Router();

router.post("/addTransaction", addTransaction);
router.get("/getTransaction", getTransactions);
router.delete("/deleteTransaction/:id", deleteTransaction);

export default router;

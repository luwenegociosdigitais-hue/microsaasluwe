import express from "express";
import { db } from "../services/db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const sales = await db.all("SELECT * FROM sales");
  res.json(sales);
});

router.post("/", async (req, res) => {
  const { product_id, quantity } = req.body;
  await db.run("INSERT INTO sales (product_id, quantity, date) VALUES (?, ?, date('now'))", [product_id, quantity]);
  res.json({ success: true });
});

export default router;
import express from "express";
import { db } from "../services/db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const products = await db.all("SELECT * FROM products");
  res.json(products);
});

router.post("/", async (req, res) => {
  const { name, stock, price } = req.body;
  await db.run("INSERT INTO products (name, stock, price) VALUES (?, ?, ?)", [name, stock, price]);
  res.json({ success: true });
});

export default router;
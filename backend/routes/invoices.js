import express from "express";
import { db } from "../services/db.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const invoices = await db.all("SELECT * FROM invoices");
  res.json(invoices);
});

router.post("/", async (req, res) => {
  const { sale_id, nfe_number, status } = req.body;
  await db.run("INSERT INTO invoices (sale_id, nfe_number, status) VALUES (?, ?, ?)", [sale_id, nfe_number, status]);
  res.json({ success: true });
});

export default router;
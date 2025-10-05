import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { db } from "./services/db.js";
import productRoutes from "./routes/products.js";
import salesRoutes from "./routes/sales.js";
import invoiceRoutes from "./routes/invoices.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/sales", salesRoutes);
app.use("/invoices", invoiceRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const db = await open({
  filename: "./database.db",
  driver: sqlite3.Database
});

await db.exec(`CREATE TABLE IF NOT EXISTS products (id INTEGER PRIMARY KEY, name TEXT, stock INTEGER, price REAL)`);
await db.exec(`CREATE TABLE IF NOT EXISTS sales (id INTEGER PRIMARY KEY, product_id INTEGER, quantity INTEGER, date TEXT)`);
await db.exec(`CREATE TABLE IF NOT EXISTS invoices (id INTEGER PRIMARY KEY, sale_id INTEGER, nfe_number TEXT, status TEXT)`);
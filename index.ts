import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

interface InventoryItem {
  id: number;
  name: string;
  sku: string;
  price: number;
  stock: number;
  active: boolean;
}

let inventory: InventoryItem[] = [
  { id: 1, name: "Mouse Logitech MX Master", sku: "MOU-001", price: 420000, stock: 12, active: true },
  { id: 2, name: "Teclado Mecánico", sku: "TEC-002", price: 250000, stock: 5, active: true },
  { id: 3, name: "Monitor 24", sku: "MON-003", price: 600000, stock: 0, active: false }
];

let nextId = 4;

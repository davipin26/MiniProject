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

app.get('/api/inventory', (req: Request, res: Response) => {
  res.status(200).json({ success: true, data: inventory, total: inventory.length });
});

app.get('/api/inventory/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id as string);
  
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "El ID debe ser un entero positivo" });
  }

  const item = inventory.find(i => i.id === id);
  
  if (!item) {
    return res.status(404).json({ error: "Elemento no encontrado" });
  }

  res.status(200).json(item);
});

app.post('/api/inventory', (req: Request, res: Response) => {
  const { name, sku, price, stock, active } = req.body;

  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: "Nombre inválido" });
  }
  if (!sku || typeof sku !== 'string' || sku.trim() === '') {
    return res.status(400).json({ error: "SKU inválido" });
  }
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: "Precio inválido, debe ser mayor a 0" });
  }
  if (typeof stock !== 'number' || stock < 0 || !Number.isInteger(stock)) {
    return res.status(400).json({ error: "Stock inválido, debe ser entero mayor o igual a 0" });
  }
  if (typeof active !== 'boolean') {
    return res.status(400).json({ error: "Estado active inválido, debe ser booleano" });
  }

  const newItem: InventoryItem = {
    id: nextId++,
    name: name.trim(),
    sku: sku.trim(),
    price,
    stock,
    active
  };

  inventory.push(newItem);
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API corriendo en el puerto ${PORT}`);
});
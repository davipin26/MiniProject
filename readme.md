# MiniProject - Inventory API

API REST para la gestión y control de inventario de productos, desarrollada con Node.js, Express y TypeScript.

## Descripción

Este proyecto proporciona un servicio Web API que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre un catálogo de productos en memoria.

## Estructura del Modelo (`InventoryItem`)

Cada objeto del inventario contiene la siguiente estructura de datos:

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | `number` | Identificador único del producto |
| `name` | `string` | Nombre del producto |
| `sku` | `string` | Código de referencia único |
| `price` | `number` | Precio unitario (debe ser mayor a 0) |
| `stock` | `number` | Cantidad disponible (entero mayor o igual a 0) |
| `active` | `boolean` | Estado de disponibilidad del producto |

## Endpoints de la API

| Método | Endpoint | Descripción | Body Requerido |
| :--- | :--- | :--- | :--- |
| **GET** | `/api/inventory` | Obtiene el listado completo de productos | No |
| **GET** | `/api/inventory/:id` | Obtiene un producto por su ID | No |
| **POST** | `/api/inventory` | Crea un nuevo producto | Sí (`name`, `sku`, `price`, `stock`, `active`) |
| **PATCH** | `/api/inventory/:id` | Actualiza parcialmente un producto existente | Opcional (cualquier campo a modificar) |
| **DELETE** | `/api/inventory/:id` | Elimina un producto por su ID | No |

## Requisitos Previos

- [Node.js](https://nodejs.org/) (Versión 16 o superior)
- `npm` (gestor de paquetes de Node)

## Instalación y Configuración

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/davipin26/MiniProject.git](https://github.com/davipin26/MiniProject.git)
   cd MiniProject

2. **Instalar las dependencias:**
    npm install

3. **ejecutar:**
    npm run dev
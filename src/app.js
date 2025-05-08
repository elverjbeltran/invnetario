import express from "express";
import categoriasR from "./routes/categorias.routes.js";
import productosR from "./routes/productos.routes.js";
import empleadosR from "./routes/empleados.routes.js";
import clientesR from "./routes/clientes.routes.js";
import proveedoresR from "./routes/proveedores.routes.js";
import cors from "cors";

const app = express();

app.set("port", 5000);
app.use(express.json());
app.use(cors());
app.use("/api/categorias", categoriasR);
app.use("/api/productos", productosR);
app.use("/api/empleados", empleadosR);
app.use("/api/clientes", clientesR);
app.use("/api/proveedores", proveedoresR);

export default app;
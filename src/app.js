
import express from "express";
import categoriasR from "./routes/categorias.routes.js";

const app = express();

app.set("port",5000)

app.use("/api/categorias",categoriasR)


export default app;
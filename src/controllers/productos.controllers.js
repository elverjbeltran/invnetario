import getConnection from "../db/db.js";

const getProducto = async (req, res) => {
  try {
    const con = await getConnection();
    const result = await con.query(
      "SELECT productos.ProductoID, productos.ProductoNombre, categorias.CategoriaNombre, productos.CantidadPorUnidad, productos.PrecioUnitario, productos.UnidadesStock, productos.UnidadesPedidas, productos.NivelReorden, productos.Discontinuado FROM productos INNER JOIN categorias ON productos.CategoriaID = categorias.CategoriaID"
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los productos" });
  }
};

const getProductoById = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const result = await con.query(
      "SELECT p.ProductoID, p.ProductoNombre, p.CategoriaID, c.CategoriaNombre, p.CantidadPorUnidad, p.PrecioUnidad, p.UnidadesEnExistencia, p.UnidadesEnPedido, p.NivelReorden, p.Descontinuado FROM productos p INNER JOIN categorias c ON p.CategoriaID = c.CategoriaID WHERE p.ProductoID = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el producto por ID" });
  }
};

const postProducto = async (req, res) => {
  try {
    const con = await getConnection();
    const { ProductoNombre, CategoriaID, CantidadPorUnidad, PrecioUnidad, UnidadesEnExistencia, UnidadesEnPedido, NivelReorden, Descontinuado } = req.body;
    const producto = { ProductoNombre, CategoriaID, CantidadPorUnidad, PrecioUnidad, UnidadesEnExistencia, UnidadesEnPedido, NivelReorden, Descontinuado };
    const result = await con.query("INSERT INTO productos SET ?", producto);
    res.json({ message: "Producto creado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el producto" });
  }
};

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const { ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado } = req.body;
    const producto = { ProductoNombre, ProveedorID, CategoriaID, CantidadPorUnidad, PrecioUnitario, UnidadesStock, UnidadesPedidas, NivelReorden, Discontinuado };
    const result = await con.query(
      "UPDATE productos SET ? WHERE ProductoID = ?",
      [producto, id]
    );
    res.json({ message: "Producto actualizado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el producto" });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const result = await con.query(
      "DELETE FROM productos WHERE ProductoID = ?",
      [id]
    );
    res.json({ message: "Producto eliminado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el producto" });
  }
};

export const methodHTTP = {
  getProducto,
  getProductoById,
  postProducto,
  updateProducto,
  deleteProducto
};
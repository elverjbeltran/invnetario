import getConnection from "../db/db.js";

const getCategory = async (req, res) => {
  try {
    const con = await getConnection();
    const result = await con.query("SELECT * FROM categorias");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener las categorías" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const result = await con.query(
      "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias WHERE CategoriaID = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener la categoría por ID" });
  }
};

const postCategory = async (req, res) => {
  try {
    const con = await getConnection();
    const { CategoriaNombre, Descripcion, Imagen } = req.body;
    const category = { CategoriaNombre, Descripcion, Imagen };
    const result = await con.query("INSERT INTO categorias SET ?", category);
    res.json({ message: "Categoría creada", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear la categoría" });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const { CategoriaNombre, Descripcion, Imagen } = req.body;
    const category = { CategoriaNombre, Descripcion, Imagen };
    const result = await con.query(
      "UPDATE categorias SET ? WHERE CategoriaID = ?",
      [category, id]
    );
    res.json({ message: "Categoría actualizada", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar la categoría" });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const result = await con.query(
      "DELETE FROM categorias WHERE CategoriaID = ?",
      [id]
    );
    res.json({ message: "Categoría eliminada", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar la categoría" });
  }
};

export const methodHTTP = {
  getCategory,
  postCategory,
  deleteCategory,
  getCategoryById,
  updateCategory
};

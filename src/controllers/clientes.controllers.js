import getConnection from "../db/db.js";

const getCliente = async (req, res) => {
  try {
    const con = await getConnection();
    const result = await con.query("SELECT * FROM clientes");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los clientes" });
  }
};

const getClienteById = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const result = await con.query(
      "SELECT ClienteID, NombreCompania, NombreContacto, TituloContacto, Direccion, Ciudad, Region, CodigoPostal, Pais, Telefono, Fax FROM clientes WHERE ClienteID = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el cliente por ID" });
  }
};

const postCliente = async (req, res) => {
  try {
    const con = await getConnection();
    const { ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax } = req.body;
    const cliente = { ClienteID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax};
    const result = await con.query("INSERT INTO clientes SET ?", cliente);
    res.json({ message: "Cliente creado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el cliente" });
  }
};

const updateCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const { NombreCompania, NombreContacto, TituloContacto, Direccion, Ciudad, Region, CodigoPostal, Pais, Telefono, Fax } = req.body;
    const cliente = { NombreCompania, NombreContacto, TituloContacto, Direccion, Ciudad, Region, CodigoPostal, Pais, Telefono, Fax };
    const result = await con.query(
      "UPDATE clientes SET ? WHERE ClienteID = ?",
      [cliente, id]
    );
    res.json({ message: "Cliente actualizado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el cliente" });
  }
};

const deleteCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const result = await con.query(
      "DELETE FROM clientes WHERE ClienteID = ?",
      [id]
    );
    res.json({ message: "Cliente eliminado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el cliente" });
  }
};

export const methodHTTP = {
  getCliente,
  postCliente,
  deleteCliente,
  getClienteById,
  updateCliente
};
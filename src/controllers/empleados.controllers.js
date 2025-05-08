import getConnection from "../db/db.js";

const getEmpleado = async (req, res) => {
  try {
    const con = await getConnection();
    const result = await con.query("SELECT * FROM empleados");
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los empleados" });
  }
};

const getEmpleadoById = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const result = await con.query(
      "SELECT EmpleadoID, Nombre, Apellido, Titulo, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Region, CodigoPostal, Pais, Telefono, Extension, Notas, Jefe FROM empleados WHERE EmpleadoID = ?",
      [id]
    );
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el empleado por ID" });
  }
};

const postEmpleado = async (req, res) => {
  try {
    const con = await getConnection();
    const { Nombre, Apellido, Titulo, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Region, CodigoPostal, Pais, Telefono, Extension, Notas, Jefe } = req.body;
    const empleado = { Nombre, Apellido, Titulo, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Region, CodigoPostal, Pais, Telefono, Extension, Notas, Jefe };
    const result = await con.query("INSERT INTO empleados SET ?", empleado);
    res.json({ message: "Empleado creado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el empleado" });
  }
};

const updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const { Nombre, Apellido, Titulo, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Region, CodigoPostal, Pais, Telefono, Extension, Notas, Jefe } = req.body;
    const empleado = { Nombre, Apellido, Titulo, FechaNacimiento, FechaContratacion, Direccion, Ciudad, Region, CodigoPostal, Pais, Telefono, Extension, Notas, Jefe };
    const result = await con.query(
      "UPDATE empleados SET ? WHERE EmpleadoID = ?",
      [empleado, id]
    );
    res.json({ message: "Empleado actualizado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el empleado" });
  }
};

const deleteEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const con = await getConnection();
    const result = await con.query(
      "DELETE FROM empleados WHERE EmpleadoID = ?",
      [id]
    );
    res.json({ message: "Empleado eliminado", result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el empleado" });
  }
};

export const methodHTTP = {
  getEmpleado,
  postEmpleado,
  deleteEmpleado,
  getEmpleadoById,
  updateEmpleado
};
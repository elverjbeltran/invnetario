import getConnection from "../db/db.js";

const getProveedores = async (req,res)=>{
    try {
        const connection = await getConnection();
        const result = await connection.query('SELECT ProveedorID, Compania, Contacto, Titulo, Direccion, Ciudad, Regiones, CodigoPostal, Pais, Telefono, Fax, Pagina FROM proveedores');
        res.json(result); 
    } catch (error) {
        console.log('ERROR 500');
    }
}

export const methodHTTP = {
    getProveedores
}
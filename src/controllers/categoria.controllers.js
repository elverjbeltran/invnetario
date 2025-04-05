import getConnection from "../db/db.js";
const getCategory = async (req, res) => {
  try {
    const con = await getConnection();
    const result = await con.query("select * from categorias");
    res.json(result);
  } catch (error) {"time lout resursrin"}
};

export const methodHTTP = {
  getCategory,
};

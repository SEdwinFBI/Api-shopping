import products from "../../products.json" assert { type: "json" };

export const getProducts = async (req, res,next) => {
  try {
    const { start, end } = req.query;
  
    res.json(products.slice(start, end));
  } catch (error) {
    //para enviar el error a un middleware de tipo error: error.handler.js
    //enviar el error en el next para decirle que tiene que ir a un middleware de ese tipo
    next(error);
  }
};
export const getProduct = async (req, res,next) => {
  try {
    const id = req.params.id;
     res.json(products.filter((product) => product.id == id));
  } catch (error) {
    next(error);
  }
};
export const postProduct = async (req, res,next) => {
  try {
    const { id, name, price } = req.body;

    products.push({ id, name, price });
    res.send(200);
  } catch(error) {
    next(error)
  }
};
export const putProduct = async (req, res,next) => {
  try {
    const id = req.params.id;
    const { name, price } = req.body;

    console.log(id, name, price);

    const index = products.findIndex((p) => p.id == id);

    if (index !== -1) {
      products[index] = {
        ...products[index],
        name,
        price,
      };

      return res.status(200).json({
        message: "Producto actualizado correctamente",
        product: products[index],
      });
    } else {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
  } catch (error) {
    next(error)
  }
};
export const deleteProduct = async (req, res,next) => {
  try {
    const id = req.params.id;

    const index = products.findIndex((p) => p.id == id);
    if (index != -1) {
      products.splice(index, 1);
      res.status(201).json({
        message: "eliminado",
      });
    } else {
      res.status(404).json({ message: "no encontrado" });
    }
  } catch(error) {
   next(error)
  }
};

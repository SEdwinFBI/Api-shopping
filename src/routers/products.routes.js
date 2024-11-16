import { Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from "../controllers/products.controller.js";
import { errorHandler, logErrors } from "../middleware/error.handler.js";
import { createProductSchema, getProductSchema, updateProductSchema } from "../helpers/product.schema.js";
import { validatorHandler } from "../middleware/validator.handler.js";

const router = Router();

router.get("/products",getProducts)
router.get("/products/:id",validatorHandler(getProductSchema,"params"))
router.post("/products",validatorHandler(createProductSchema,"body"))
router.put("/products/:id",validatorHandler(getProductSchema,"params"),
validatorHandler(updateProductSchema,"body"))
router.delete("/products/:id",deleteProduct)


export default router;
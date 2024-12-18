import { Router } from "express";
import { deleteProduct, getProduct, getProducts, postProduct, putProduct } from "../controllers/products.controller.js";
import { errorHandler, logErrors } from "../middleware/error.handler.js";
import { createProductSchema, getProductSchema, updateProductSchema } from "../helpers/product.schema.js";
import { validatorHandler } from "../middleware/validator.handler.js";

const router = Router();

router.get("/api/products",getProducts)
router.get("/api/products/:id",validatorHandler(getProductSchema,"params"),getProduct)
router.post("/api/products",validatorHandler(createProductSchema,"body"),postProduct)
router.put("/api/products/:id",validatorHandler(getProductSchema,"params"),
validatorHandler(updateProductSchema,"body"),putProduct)
router.delete("/api/products/:id",deleteProduct)


export default router;
import express from "express";
import morgan from "morgan";
import cors from "cors";

//dejar todo en una carpeta api, y renombrar los end points con "/api/" antes de cada ruta
//vercel json obligatorio

import routerProducts from "./routers/products.routes.js";
import { errorHandler, logErrors } from "./middleware/error.handler.js";
const app = express();

app.use(morgan("dev"));
app.use(express.json());
const whitelist = [//listas de url que puede dejar ingresar cors
    "http://localhost:8080","https://edwinportafolio.netlify.app","http://localhost:3000/"
]
const configOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            // Permitir sin origen (para Postman u otras herramientas sin encabezado Origin)
            callback(null, true);
        } else {
            callback(new Error("no permitido"));
        }
    }
}
app.use(cors(configOptions));


app.use(routerProducts)


app.use(logErrors)
app.use(errorHandler)


export default app;


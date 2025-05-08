import express, {json, urlencoded} from 'express';
import {RegisterRoutes} from "../build/routes";

import { Response as ExResponse, Request as ExRequest } from "express";
import swaggerUi from 'swagger-ui-express';

export const app = express();

app.use("/docs", swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    const swaggerDocument = await import("../build/swagger.json");
    res.send(swaggerUi.generateHTML(swaggerDocument));
  });

app.use(
    urlencoded({
        extended: true,
    })
);
app.use(json());

RegisterRoutes(app);
import express, { NextFunction, Request, Response } from "express";
import { dallEService } from "../4-services/DallEService";
import { StatusCode } from "../3-models/enums";

// Data controller:
class GeneratorController {

    // Create a router object for listening to HTTP requests:
    public readonly router = express.Router();

    // Register routes once: 
    public constructor() {
        this.registerRoutes();
    }

    // Register routes:
    private registerRoutes(): void {
        this.router.post("/image", this.getImage);
    }

    private async getImage(request: Request, response: Response, next: NextFunction): Promise<void> {
        try {
const prompt:string = request.body.prompt
const url = await dallEService.generateImage(prompt)
response.status(StatusCode.Created).json(url)
        }
        catch (err: any) { next(err); }
    }
}

const generatorController = new GeneratorController();
export const generatorRouter = generatorController.router;

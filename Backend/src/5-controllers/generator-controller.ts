import express, { Request, Response } from "express";
import { Next } from "mysql2/typings/mysql/lib/parsers/typeCast";
import { loginServices } from "../4-services/loginServices";

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
    this.router.post("/auth", this.verifyToken);
    // this.router.post("/image", this.getImage);
  }

  private async verifyToken(request: Request, response: Response, next: Next) {
    console.log("this is backend");
    try {
      const token = request.body.token;
      const res = await loginServices.verifyToken(token);
    } catch (error: any) {
      console.log(error);
    }
  }

  //     private async getImage(request: Request, response: Response, next: NextFunction): Promise<void> {
  //         try {
  // const prompt:string = request.body.prompt
  // const url = await dallEService.generateImage(prompt)
  // response.status(StatusCode.Created).json(url)
  //         }
  //         catch (err: any) { next(err); }
  //     }
}

const generatorController = new GeneratorController();
export const generatorRouter = generatorController.router;

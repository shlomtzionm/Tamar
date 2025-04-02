import express, { NextFunction, Request, Response } from "express";
import { loginServices } from "../4-services/loginServices";
import { StatusCode } from "../3-models/enums";

// Data controller:
class LoginController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.registerRoutes();
  }

  // Register routes:
  private registerRoutes(): void {
    this.router.post("/login", this.login);
    // this.router.post("/image", this.getImage);
  }

  private async login(request: Request, response: Response,next:NextFunction) {
    try {
      const token = request.body.token;
      const res = await loginServices.login(token);
    response.status(StatusCode.OK).json(res)
    } catch (error: any) {
      next(error);
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

const loginController = new LoginController();
export const loginRouter = loginController.router;

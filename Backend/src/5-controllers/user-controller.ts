import express, { Request, Response, NextFunction } from "express";
import { UserModel } from "../3-models/userModel";
import { userServices } from "../4-services/userServices";
import { StatusCode } from "../3-models/enums";

// Data controller:
class UserController {
  // Create a router object for listening to HTTP requests:
  public readonly router = express.Router();

  // Register routes once:
  public constructor() {
    this.router.post("/register", this.register);
  }



  private async register(request: Request, response: Response, next: NextFunction) {
    try {
      const user = new UserModel(request.body);
      const token = await userServices.setNewUser(user);
     response.status(StatusCode.Created).json(token);
    } catch (err: any) {
      next(err);
    }
  }


}

const userController = new UserController();
export const userRouter = userController.router;

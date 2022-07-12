import { Response, Request, NextFunction } from "express";
import { UserModel } from "./../model/userModel";
export class UsersController {
  userModel: UserModel = new UserModel();

  displayUsers = async (request: Request, result: Response) => {
    let users = await this.userModel.getAllUsers().then(item => item);
    result.render("users", {users});
  };
}

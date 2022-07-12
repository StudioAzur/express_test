import axios, { Axios } from "axios";
import { User } from "../modelsData/users";
import "dotenv/config";

export class UserModel {
  usersTable: User[] = [new User()];
  URI: string | undefined = process.env.URI;

  getAllUsers = () : Promise<UserModel> => {
    return axios.get(this.URI + "/users").then(item => item.data);
  };
}

import bcrypt from "bcrypt";
import { UserModel } from "../models/User.model.js";

const findUserById = async (req, res) => {
  try {
    const id = req.params.user_id;
    const response = await UserModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("Missing parameter");
    }
    if (await UserModel.emailExists(email)) {
      return res.status(400).send("Email already in use");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await UserModel.createUser(name, email, hashedPassword);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  findUserById,
  createUser,
};

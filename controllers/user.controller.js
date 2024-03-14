import bcrypt from "bcrypt";
import { UserModel } from "../models/User.model.js";

const findById = async (req, res) => {
  try {
    const id = req.params.user_id;
    const response = await UserModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).send("Missing parameter");
    }
    if (await UserModel.emailExists(email)) {
      return res.status(400).send("Email already in use");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const response = await UserModel.create(name, email, hashedPassword);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};
const makeRoutineActive = async (req, res) => {
  try {
    const response = await UserModel.makeRoutineActive(req.body);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  findById,
  create,
  makeRoutineActive
};

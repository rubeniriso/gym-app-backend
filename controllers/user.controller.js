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

const makeRoutineActive = async (req, res) => {
  try {
    const response = await UserModel.makeRoutineActive(req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};
const getActiveRoutine = async (req, res) => {
  try {
    const response = await UserModel.getActiveRoutine(req.params.user_id);
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const userController = {
  findById,
  makeRoutineActive,
  getActiveRoutine
};

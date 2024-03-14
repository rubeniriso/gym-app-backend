import { RoutineModel } from "../models/Routine.model.js";

const findRoutineById = async (req, res) => {
  try {
    const id = req.params.routine_id;
    const response = await RoutineModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findRoutineByUser = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const response = await RoutineModel.findByUser(userId);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const routineController = {
  findRoutineById,
  findRoutineByUser,
};

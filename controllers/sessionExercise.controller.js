import { SessionExerciseModel } from "../models/SessionExercise.model.js";

const findBySessionId = async (req, res) => {
  try {
    const id = req.params.session_id;
    const response = await SessionExerciseModel.findBySessionId(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.sessionexercise_id;
    const response = await SessionExerciseModel.deleteById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const response = await SessionExerciseModel.create(req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const sessionExerciseController = {
  findBySessionId,
  deleteById,
  create,
};

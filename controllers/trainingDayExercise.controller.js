import { TrainingDayExerciseModel } from "../models/TrainingDayExercise.model.js";

const findByTrainingDayId = async (req, res) => {
  try {
    const id = req.params.trainingday_id;
    const response = await TrainingDayExerciseModel.findByTrainingDayId(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.trainingDayExercise_id;
    const response = await TrainingDayExerciseModel.deleteById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    console.log(req);
    const response = await TrainingDayExerciseModel.create(
      req.params.trainingday_id,
      req.body
    );
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const trainingDayExerciseController = {
  findByTrainingDayId,
  deleteById,
  create,
};

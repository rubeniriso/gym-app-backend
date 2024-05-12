import { TrainingDayModel } from "../models/TrainingDay.model.js";
import { TrainingDayExerciseModel } from "../models/TrainingDayExercise.model.js";

const findById = async (req, res) => {
  try {
    const id = req.params.trainingday_id;
    const response = await TrainingDayModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findByWeekId = async (req, res) => {
  try {
    const id = req.params.week_id;
    const response = await TrainingDayModel.findByWeekId(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.trainingday_id;
    const response = await TrainingDayModel.deleteById(id);
    res.status(200).json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const response = await TrainingDayModel.create(
      req.params.week_id,
      req.body
    );
    res.status(200).json(response.rows[0]);
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const response = await TrainingDayModel.update(
      req.params.trainingday_id,
      req.body
    );
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const updateExercises = async (req, res) => {
  try {
    const wasUpdated = await TrainingDayModel.updateExercises(
      req.params.trainingday_id,
      req.body
    );
    if (wasUpdated) {
      const response = await TrainingDayExerciseModel.findByTrainingDayId(
        req.params.trainingday_id
      );
      res.status(200).json(response.rows);
    }
    res.status(500);
  } catch (error) {
    console.log(error);
  }
};

export const trainingDayController = {
  findById,
  findByWeekId,
  deleteById,
  create,
  update,
  updateExercises,
};

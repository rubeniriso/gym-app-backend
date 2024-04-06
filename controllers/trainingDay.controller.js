import { TrainingDayModel } from "../models/TrainingDay.model.js";

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
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const trainingDayController = {
  findById,
  findByWeekId,
  deleteById,
};

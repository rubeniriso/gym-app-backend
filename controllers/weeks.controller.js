import { WeekModel } from "../models/Week.model.js";

const findById = async (req, res) => {
  try {
    const id = req.params.week_id;
    const response = await WeekModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findAllByRoutineId = async (req, res) => {
  try {
    const id = req.params.routine_id;
    const response = await WeekModel.findAllByRoutineId(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.week_id;
    const response = await WeekModel.deleteById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const response = await WeekModel.create(req.params.routine_id, req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const weekController = {
  findById,
  findAllByRoutineId,
  deleteById,
  create,
};

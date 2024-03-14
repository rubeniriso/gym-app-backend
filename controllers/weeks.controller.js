import { WeekModel } from "../models/Week.model.js";

const findWeekById = async (req, res) => {
  try {
    const id = req.params.week_id;
    const response = await WeekModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findWeeksByRoutineId = async (req, res) => {
  try {
    const id = req.params.routine_id;
    const response = await WeekModel.findByRoutineId(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteWeek = async (req, res) => {
  try {
    const id = req.params.week_id;
    const response = await WeekModel.deleteById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const createWeek = async (req, res) => {
  try {
    const { routineId, name, description } = req.body;
    const response = await WeekModel.findById(routineId, name, description);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const weekController = {
  findWeekById,
  findWeeksByRoutineId,
  deleteWeek,
  createWeek,
};

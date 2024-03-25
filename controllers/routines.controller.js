import { RoutineModel } from "../models/Routine.model.js";

const findById = async (req, res) => {
  try {
    const id = req.params.routine_id;
    const response = await RoutineModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findAllByUser = async (req, res) => {
  try {
    const userId = req.params.user_id;
    const response = await RoutineModel.findAllByUser(userId);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const response = await RoutineModel.create(req.params.user_id, req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const response = await RoutineModel.update(req.params.routine_id, req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};
const deleteById = async (req, res) => {
  try {
    const id = req.params.routine_id;
    await RoutineModel.deleteById(id);
    res.status(200).json({ success: true, message: "Routine succesfully deleted." });
  } catch (error) {
    console.error('Error deleting routine:', error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
export const routineController = {
  findById,
  findAllByUser,
  create,
  update,
  deleteById
};

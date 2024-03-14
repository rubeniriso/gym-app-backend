import { SessionModel } from "../models/Session.model.js";

const findById = async (req, res) => {
  try {
    const id = req.params.session_id;
    const response = await SessionModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findByWeekId = async (req, res) => {
  try {
    const id = req.params.week_id;
    const response = await SessionModel.findByWeekId(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.session_id;
    const response = await SessionModel.deleteById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const sessionController = {
  findById,
  findByWeekId,
  deleteById,
};

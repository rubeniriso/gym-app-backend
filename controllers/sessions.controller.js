import { SessionModel } from "../models/Session.model.js";

const findSessionById = async (req, res) => {
  try {
    const id = req.params.session_id;
    const response = await SessionModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findSessionsByWeekId = async (req, res) => {
  try {
    const id = req.params.week_id;
    const response = await SessionModel.findByWeekId(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteSessionById = async (req, res) => {
  try {
    const id = req.params.session_id;
    const response = await SessionModel.deleteById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const sessionController = {
  findSessionById,
  findSessionsByWeekId,
  deleteSessionById,
};

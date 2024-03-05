import { sessionModel } from "../models/Session.model.js";

const getAll = async (_, res) => {
  try {
    const response = await sessionModel.findAll();
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const sessionController = {
  getAll,
};

import { SessionModel } from "../models/Session.model.js";

const findSession = async (req, res) => {
  try {
    const id = req.params.session_id;
    const response = await SessionModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const sessionController = {
  findSession,
};

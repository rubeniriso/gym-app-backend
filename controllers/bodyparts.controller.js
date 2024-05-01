import { BodypartModel } from "../models/Bodypart.model.js";

const findAll = async (req, res) => {
  try {
    const response = await BodypartModel.findAll();
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const bodypartsController = {
  findAll,
};

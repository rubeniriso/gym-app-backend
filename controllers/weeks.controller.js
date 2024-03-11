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

export const weekController = {
  findWeekById,
};

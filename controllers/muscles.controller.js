import { MuscleModel } from "../models/Muscle.model.js";

const findAllByBodypartId = async (req, res) => {
  try {
    const bodypartId = req.params.bodypart_id;
    const response = await MuscleModel.findAllByBodypartId(bodypartId);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const musclesController = {
  findAllByBodypartId,
};

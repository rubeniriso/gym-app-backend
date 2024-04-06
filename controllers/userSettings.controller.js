import { UserSettingsModel } from "../models/UserSettings.model.js";

const createUserSettings = async (req, res) => {
  console.log("hehe");
  try {
    const response = await UserSettingsModel.createUserSettings(
      req.params.user_id
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
const makeRoutineActive = async (req, res) => {
  try {
    const response = await UserSettingsModel.makeRoutineActive(req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};
const getActiveRoutine = async (req, res) => {
  try {
    const response = await UserSettingsModel.getActiveRoutine(
      req.params.user_id
    );
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};

export const userSettingsController = {
  makeRoutineActive,
  getActiveRoutine,
  createUserSettings,
};

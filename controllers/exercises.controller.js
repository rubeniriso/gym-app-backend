import { ExerciseModel } from "../models/Exercise.model.js";

const findAll = async (req, res) => {
  try {
    const response = await ExerciseModel.findAll();
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findExerciseById = async (req, res) => {
  try {
    const id = req.params.exercise_id;
    const response = await ExerciseModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findExerciseByName = async (req, res) => {
  try {
    const name = req.params.name;
    const response = await ExerciseModel.findByName(name);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findExerciseByMuscleId = async (req, res) => {
  try {
    const muscleId = req.params.muscleId;
    const response = await ExerciseModel.findByMuscleId(muscleId);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findExerciseByEquipment = async (req, res) => {
  try {
    const equipment = req.params.equipment;
    const response = await ExerciseModel.findByEquipment(equipment);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const exerciseController = {
  findExerciseById,
  findExerciseByName,
  findExerciseByMuscleId,
  findExerciseByEquipment,
  findAll,
};

import { RoutineTypesModel } from "../models/RoutineTypes.model.js";

const findById = async (req, res) => {
  try {
    const id = req.params.system_id;
    const response = await RoutineTypesModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findAll = async (req, res) => {
  try {
    const response = await RoutineTypesModel.findAll();
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.system_id;
    const response = await RoutineTypesModel.deleteById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const response = await RoutineTypesModel.create(req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const response = await RoutineTypesModel.update(req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const routineTypesController = {
  findById,
  findAll,
  deleteById,
  create,
  update
};

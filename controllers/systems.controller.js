import { SystemModel } from "../models/System.model.js";

const findById = async (req, res) => {
  try {
    const id = req.params.system_id;
    const response = await SystemModel.findById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const findAll = async (req, res) => {
  try {
    const response = await SystemModel.findAll();
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const deleteById = async (req, res) => {
  try {
    const id = req.params.system_id;
    const response = await SystemModel.deleteById(id);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const create = async (req, res) => {
  try {
    const response = await SystemModel.create(req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const response = await SystemModel.update(req.body);
    res.status(200).json(response.rows);
  } catch (error) {
    console.log(error);
  }
};

export const systemsController = {
  findById,
  findAll,
  deleteById,
  create,
  update
};

import { RequestHandler } from "express";

import { User } from "../models/user";


export const createUser: RequestHandler = async (req, res, next) => {
  let user = await User.create({ ...req.body });
  return res
    .status(201)
    .json({ msg: "user create successfully", data: user });
};

export const getAllUser: RequestHandler = async (req, res, next) => {
  const allUser: User[] = await User.findAll();
  return res
    .status(200)
    .json({ msg: "user get all successfully", data: allUser });
};

export const getByIdUser: RequestHandler = async (req, res, next) => {
  const {id} = req.params;
  const users:User | null = await User.findByPk(id);
  return res
    .status(200)
    .json({ msg: "user get successfully", data: users });
};

export const updateUser: RequestHandler = async (req, res, next) => {
  const {id} = req.params;
  await User.update({...req.body},{where:{id}});
  const updateUser: User| null = await User.findByPk(id);
  return res
  .status(200)
  .json({ msg: "user get successfully", data: updateUser });
}

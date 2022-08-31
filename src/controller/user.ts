import { RequestHandler } from "express";

import  User  from "../models/user";


export const createUser: RequestHandler = async (req, res, next) => {
  var user = await User.create({ ...req.body });
  console.log(user);
  // return res
  //   .status(200)
  //   .json({ message: "Created successfully", data: users });
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

import { Router } from 'express';

import {
  createUser,
  getAllUser,
  getByIdUser,
  updateUser
} from '../controller/user';

const router = Router();

router.get("/", getAllUser);

router.post("/", createUser);

router.get("/:id", getByIdUser);

router.post("/:id", updateUser);

export default router;

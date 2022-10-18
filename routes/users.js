/* Routes for users managements - CRUD -*/

import express from "express";
import {
  getUser,
  getUsers,
  addUser,
  editUser,
  deleteUser,
} from "../controllers/users/index.js";

import users from "../_data/users.js";

// Middlewares
import { advancedQuery } from "../middlewares/advanceQuery.js";
const router = express.Router();

router.route("/").get(advancedQuery(users), getUsers).post(addUser);
router.route("/:id").get(getUser).put(editUser).delete(deleteUser);


export default router;

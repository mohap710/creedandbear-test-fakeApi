import users from "../../_data/users.js";
import { genrateUser } from "../../utils/generateUser.js";

/**
 * @desc      Edit user
 * @route     PUT: /users/:id
 */

export const editUser = async (req, res, next) => {
  try {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id == req.params.id);

      if (index === -1) {
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }
      
      const user = genrateUser()
      user.id = req.params.id
      users[index] = user
      res.status(200).json({
        data: {
          status: "success",
        },
      });
    }, 3000);
  } catch (error) {
    console.error(error);
  }
};

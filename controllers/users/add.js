import users from "../../_data/users.js";
import { genrateUser } from "../../utils/generateUser.js";

/**
 * @desc      Add new user
 * @route     POST: /users
 */

export const addUser = async (req, res, next) => {
  try {

    setTimeout(() => {
      const user = genrateUser()
      users.push(user)
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
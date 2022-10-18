import users from "../../_data/users.js";

/**
 * @desc      Get Single user
 * @route     GET: /users/:id
 */

export const getUser = async (req, res, next) => {
  try {
    setTimeout(() => {
      const user = users.find((user) => user.id == req.params.id);

      if (!user) {
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }
      res.status(200).json(user);
    }, 3000);
  } catch (error) {
    console.error(error);
  }
};

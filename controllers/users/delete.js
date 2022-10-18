import users from "../../_data/users.js";

/**
 * @desc      Delete user
 * @route     DELETE: /users/:id
 */

export const deleteUser = async (req, res, next) => {
  try {
    setTimeout(() => {
      const index = users.findIndex((user) => user.id == req.params.id);

      if (index === -1) {
        return res
          .status(404)
          .json({ status: false, message: "User not found" });
      }

      users.splice(index,1)
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

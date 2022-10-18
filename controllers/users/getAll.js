/**
 * @desc      Get all users
 * @route     GET: /users
 */

export const getUsers = async (req, res, next) => {
  try {
    setTimeout(() => {
      res.status(200).json(res.queryResult);
    }, 3000);
  } catch (error) {
    console.error(error);
  }
};

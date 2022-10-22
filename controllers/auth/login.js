import users from "../../_data/users.js";
/**
 * @desc      Login to the System
 * @route     POST: /auth/login
 */

export const login = async (req, res, next) => {
  try {
    setTimeout(() => {
      let { email } = req.body;
     // Remove whitespace in the input   
      if (!email) {
        return res.status(400).json({
          data: {
            status: false,
            error: "Please provide Email",
          },
        });
      }
      email = email.trim()
      const user = users.find((user) => email === user.email);

      if (!user) {
        return res.status(200).json({
          data: {
            status: false,
            error: "Wrong credintials !",
          },
        });
      }

      res.status(200).json({
        data: {
          status: "success",
          user,
        },
      });
    }, 3000);
  } catch (error) {
    console.error(error);
  }
};

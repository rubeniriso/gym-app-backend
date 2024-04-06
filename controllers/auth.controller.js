import { AuthModel } from "../models/Auth.model.js";
const register = async (req, res) => {
  const { username, email, password, repeatPassword } = req.body;
  try {
    const response = await AuthModel.register(
      username,
      email,
      password,
      repeatPassword
    );
    if (response.success)
      res
        .status(200)
        .json({ success: true, message: "User created succesfully" });
    else res.status(400).json({ success: false, message: response.message });
  } catch (error) {
    console.error("Error registering:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

export const authController = {
  register,
};

import User from "../models/User.js";

export const syncUser = async (req, res) => {
  try {
    const descopeId = req.user.userId;
    const email = req.user.email;

    let user = await User.findOne({ descopeId });

    if (!user) {
      user = await User.create({
        descopeId,
        email
      });
    }

    res.json(user);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
import Descope from '@descope/node-sdk';

const descopeClient = Descope({
  projectId: 'process.env.DESCOPE_PROJECT_ID'
});

export const verifyDescope = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    const session = await descopeClient.validateSession(token);

    req.user = session;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
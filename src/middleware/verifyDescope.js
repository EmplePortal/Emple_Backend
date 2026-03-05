import DescopeClient from '@descope/node-sdk';

const descopeClient = DescopeClient({
  projectId: process.env.NEXT_PUBLIC_DESCOPE_PROJECT_ID, 
});

export const verifyDescope = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const session = await descopeClient.validateSession(token);

    if (!session) {
      return res.status(401).json({ message: "Invalid session" });
    }

    // attach user info
    req.user = {
      userId: session.token.sub,
      email: session.token.email,
    };

    next();

  } catch (error) {
    console.error("Descope verification error:", error);
    res.status(401).json({ message: "Unauthorized" });
  }
};
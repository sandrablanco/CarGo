import jwt from "jsonwebtoken";

const authMiddleware = ( req, res, next) => {
  try {
    // catch token of header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    // to get token
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //sAve user infor
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default authMiddleware;
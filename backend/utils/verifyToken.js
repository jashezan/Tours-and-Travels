import jwt from "jsonwebtoken";
import { USER_ROLE } from "../data/index.js";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: "Token not available" });
  } else {
    //if token exist then verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) {
        console.error(err)
        return res
          .status(401)
          .json({ success: false, message: "token is invalid" });
      } else {
        req.user = user;
        next(); // dont forget to call next
      }
    });
  }
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.role === USER_ROLE.ADMIN) {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.role === USER_ROLE.ADMIN) {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "You're not authorozed" });
    }
  });
};

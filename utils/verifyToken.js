const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("توکن برای اعتبار سنجی نیاز است!!!");
  }
  try {
    const decoded = jwt.verify(token, "MySuperSecret");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("توکن نامعتبر است");
  }
  return next();
};

module.exports = verifyToken;
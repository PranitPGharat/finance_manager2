export const verifyUser = (req, res, next) => {
  const { userId } = req.body || req.query || req.params;
  
  if (!userId) {
    return res.status(401).json({ message: "User ID is required!" });
  }

  req.userId = userId;
  next();
};

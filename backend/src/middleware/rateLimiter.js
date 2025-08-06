import ratelimit from "../config/upstach.js";

const rateLimiter = async (req, res, next) => {

  try {
    // Get user ID 
    // add the userid to my-rate-limit
    const { success } = await ratelimit.limit("userId")

    if (!success) {
      return res.status(429).json({ 
        message: "Too many requests - please try again later."
      })
    }
    next();

  } catch (error) {
    console.log("Rate limiter error:", error);
    next(error);
  }
}

export default rateLimiter;
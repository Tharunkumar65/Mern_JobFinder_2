import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        // Retrieve the token from cookies
        console.log("Cookies:", req.cookies);
        const token = req.cookies.token;
        console.log(token);
        // If no token is present, return a 401 Unauthorized response
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        // If the token is invalid or cannot be decoded, return a 401 Unauthorized response
        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        // Attach the userId from the token to the request object for later use
        req.id = decoded.userId;

        // Move to the next middleware or route handler
        next();
    } catch (error) {
        // If an error occurs, log it and return a 500 Internal Server Error response
        console.error("Authentication Error:", error);
        return res.status(500).json({
            message: "Server error during authentication",
            success: false,
        });
    }
};

export default isAuthenticated;

import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        
        // console.log("Cookies:", req.cookies);
        const token = req.cookies.token;
        // console.log(token);
        
        if (!token) {
            return res.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        if (!decoded) {
            return res.status(401).json({
                message: "Invalid token",
                success: false,
            });
        }

        req.id = decoded.userId;

        next();
    } catch (error) {
        console.error("Authentication Error:", error);
        return res.status(500).json({
            message: "Server error during authentication",
            success: false,
        });
    }
};

export default isAuthenticated;

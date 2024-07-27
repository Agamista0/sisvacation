import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../config.js";

// Function to generate a random numeric ID
const generateNumericId = (length = 10) => {
    return Math.floor(Math.random() * (9 * Math.pow(10, length - 1))) + Math.pow(10, length - 1);
};

const getOrCreateProfile = (req, res) => {
    let token = req.cookies.token;
    console.log("Request headers:", req.headers);
    console.log("Secure:", req.secure);
    console.log("Token from cookies:", token);

    if (!token) {
        // Create a new token with a numeric ID if it doesn't exist
        const userId = generateNumericId();
        token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '30d' });
        console.log("Generated new token:", token);

        // Set the cookie with Secure flag if using HTTPS
        res.cookie('token', token, {
            httpOnly: true,
            secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
            maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
        });
        console.log("Set cookie with token:", token);
    }

    jwt.verify(token, JWT_SECRET, {}, (err, user) => {
        if (err) {
            console.log("Token verification error:", err);
            return res.status(401).json({ message: 'Invalid or expired token' });
        }
        console.log("Verified user:", user);
        res.json(user);
    });
};

export { getOrCreateProfile };


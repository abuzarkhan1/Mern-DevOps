import jwt from 'jsonwebtoken';

const requireAuth = async (req, res, next) => {
    const { authorization } = req.headers;

    // Check if the authorization header is present
    if (!authorization) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Extract the token from the header (expecting format "Bearer <token>")
    const token = authorization.split(' ')[1]; // Extract token part

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token missing' });
    }

    try {
        // Verify the token using the hardcoded secret
        const decoded = jwt.verify(token, '018ea8134717c1d5bad6f71dabdfbfb8f26dbf0b56e16c4083b20e5f2c1c7ace');
        req.user = decoded; // Attach decoded user info to request
        req.token = token;  // Attach the token to request (optional)
        next(); // Proceed to the next middleware/route handler
    } catch (error) {
        // If token is invalid or expired
        return res.status(500).json({ message: error.message });
    }
};

export default requireAuth;

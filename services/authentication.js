require('dotenv').config();
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Corrected split method

    if (token == null) {
        return res.sendStatus(401); // If there is no token
    }

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
        if (err) {
            return res.sendStatus(403); // If the token is invalid or expired
        }
        res.locals.email = response.email; // Assuming the email is stored in the token payload
        next();
    });
}

module.exports = { authenticateToken: authenticateToken };

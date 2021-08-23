const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

exports.generateKey = (username) => {
    return jwt.sign(
        { username: username },
        `${process.env.TOKEN_KEY}`,
        { expiresIn: '7d'}
    );
};

exports.validateJWT = async (accessToken) => {
    try {
        return jwt.verify(accessToken, `${process.env.TOKEN_KEY}`);
    } catch (e) {
        return {
            error: 'Invalid JWT',
            reason: e
        }
    }
}
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();

module.exports = {
    getUserById: async (req, res) => {
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            return res
                .status(401)
                .json({ message: "Access Denied. Token is missing." });
        }

        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const user_id = decodedToken.id;

        const user = await User.findAll({
            where: { id: user_id },
        });

        res.json(user);
    },
    updateName: async (req, res) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied. Token is missing." });
            }

            const decodedToken = jwt.verify(token, process.env.JWT_KEY);
            const user_id = decodedToken.id;

            const { name } = req.body;
            const [updatedRows] = await User.update(
                { name },
                { where: { id: user_id } }
            );

            if (updatedRows > 0) {
                return res
                    .status(200)
                    .json({ message: "Name updated successfully." });
            } else {
                return res
                    .status(404)
                    .json({ message: "User not found or name not updated." });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    },
    updatePassword: async (req, res) => {
        try {
            const token = req.headers.authorization.split(" ")[1];
            if (!token) {
                return res
                    .status(401)
                    .json({ message: "Access Denied. Token is missing." });
            }

            const decodedToken = jwt.verify(token, process.env.JWT_KEY);
            const user_id = decodedToken.id;

            const { currentPassword, newPassword } = req.body;

            const user = await User.findByPk(user_id);

            if (!user) {
                return res.status(404).json({
                    message: "User not found.",
                });
            }

            const isPasswordValid = await bcrypt.compare(
                currentPassword,
                user.password
            );

            if (!isPasswordValid) {
                return res
                    .status(401)
                    .json({ message: "Current password is incorrect." });
            }

            const hashedNewPassword = await bcrypt.hash(
                newPassword,
                saltRounds
            );

            const [updatedRows] = await User.update(
                { password: hashedNewPassword },
                { where: { id: user_id } }
            );

            if (updatedRows > 0) {
                return res
                    .status(200)
                    .json({ message: "Password updated successfully." });
            } else {
                return res.status(500).json({
                    message: "Failed to update password. Please try again.",
                });
            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    },
};

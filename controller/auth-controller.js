const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;
require("dotenv").config();

module.exports = {
    login: async (req, res) => {
        const data = req.body;

        const { email, password } = data;

        if (!email || !password) {
            return res
                .status(400)
                .json({ message: "Please fill the data completely!" });
        }

        try {
            const user = await User.findOne({ where: { email: data.email } });

            if (!user) {
                return res.status(404).json({ message: "Email not found!" });
            }

            const passwordMatch = bcrypt.compareSync(
                data.password,
                user.password
            );

            if (!passwordMatch) {
                return res
                    .status(400)
                    .json({ message: "Email or password incorrect!" });
            }

            const token = jwt.sign(
                { id: user.id, email: user.email },
                process.env.JWT_KEY
            );

            res.status(200).json({
                message: "Login Successfully!",
                data: {
                    userId: user.id,
                    name: user.name,
                    token,
                },
            });
        } catch (error) {
            res.status(500).json({
                message: "Login failed!",
                error: error.message,
            });
        }
    },
    register: async (req, res) => {
        const data = req.body;

        const { name, email, password } = data;
        if (!name || !email || !password) {
            return res
                .status(400)
                .json({ message: "Please fill the data completely!" });
        }

        try {
            const checkEmail = await User.findOne({
                where: { email: data.email },
            });

            if (checkEmail) {
                return res
                    .status(409)
                    .json({ message: "Email is already in use!" });
            }

            const hashPassword = bcrypt.hashSync(data.password, saltRounds);
            data.password = hashPassword;

            const user = await User.create(data);

            res.status(201).json({
                message: "Account created successfully!",
                data: {
                    userId: user.id,
                    name: user.name,
                    email: user.email,
                },
            });
        } catch (error) {
            res.status(500).json({
                message: "Register failed!",
                error: error.message,
            });
        }
    },
};

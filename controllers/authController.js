const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const db = require("../models");
const User = db.user;

exports.register = async (req, res) => {
    const { email, password, adminSecret } = req.body;

    try {
        const user = await User.create({
            email,
            password,
            isAdmin: adminSecret === process.env.ADMIN_SECRET,
        });
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user.id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );
        res.json({ token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

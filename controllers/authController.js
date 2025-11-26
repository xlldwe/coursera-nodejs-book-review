import fs from "fs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const usersFile = "./data/users.json";

export function registerUser(req, res) {
    const { username, password } = req.body;

    const users = JSON.parse(fs.readFileSync(usersFile));

    if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashed = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashed });
    fs.writeFileSync(usersFile, JSON.stringify(users));

    res.json({ message: "User registered successfully" });
}

export function loginUser(req, res) {
    const { username, password } = req.body;
    const users = JSON.parse(fs.readFileSync(usersFile));

    const user = users.find(u => u.username === username);
    if (!user) return res.status(404).json({ message: "User not found" });

    const valid = bcrypt.compareSync(password, user.password);
    if (!valid) return res.status(401).json({ message: "Invalid password" });

    const token = jwt.sign({ username }, "secret123", { expiresIn: "1h" });

    res.json({ token });
}

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { prisma } from "../lib/prisma.js";

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await prisma.adminUser.findUnique({ where: { email } });
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  const token = jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: "8h",
  });

  res.json({ token });
}

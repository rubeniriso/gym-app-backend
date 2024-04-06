import { pool } from "../db/connection.js";
import bcrypt from "bcrypt";

const emailExists = async (email) => {
  const query = "SELECT * FROM users WHERE email = $1;";
  const values = [email];
  const result = await pool.query(query, values);
  console.log(result.rows.length > 0);
  return result.rows.length > 0;
};

const register = async (username, email, password, repeatPassword) => {
  if (!username || !email || !password || !repeatPassword) {
    return { success: false, message: "You are missing a parameter." };
  }
  if (password != repeatPassword)
    return { success: false, message: "Passwords don't match." };
  if (await emailExists(email)) {
    return { success: false, message: "E-mail already registered." };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const values = [username, email, hashedPassword];
  const query =
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *";
  const response = await pool.query(query, values);
  return { success: true, message: "User registered." };
};

const login = async (email, password) => {
  if (!email || !password) {
    return { success: false, message: "You are missing a parameter." };
  }
  if (password != repeatPassword)
    return { success: false, message: "Passwords don't match." };
  if (await emailExists(email)) {
    return { success: false, message: "E-mail already registered." };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const values = [username, email, hashedPassword];
  const query =
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *";
  const response = await pool.query(query, values);
  return response.rows;
};
export const AuthModel = {
  register,
};

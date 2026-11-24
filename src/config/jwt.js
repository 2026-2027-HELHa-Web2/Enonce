import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import userRepository from '../repositories/UserRepository.js';
import { getJwtSecret } from '../config/jwt.js';

export class AuthError extends Error {
  constructor(message, status = 400) {
    super(message);
    this.status = status;
  }
}

const generateToken = (userId) =>
  jwt.sign({ userId }, getJwtSecret(), { expiresIn: '24h' });

export const register = async ({ nom, email, password }) => {
  const existing = await userRepository.findByEmail(email);
  if (existing) {
    throw new AuthError('Un utilisateur avec cet email existe déjà', 400);
  }

  const user = new User({ nom, email, password });
  await user.hashPassword();
  const saved = await userRepository.save(user);

  return { user: saved.toJSON(), token: generateToken(saved.id) };
};

export const login = async ({ email, password }) => {
  const user = await userRepository.findByEmail(email);
  if (!user) throw new AuthError('Identifiants invalides', 401);

  const isValid = await user.comparePassword(password);
  if (!isValid) throw new AuthError('Identifiants invalides', 401);

  return { user: user.toJSON(), token: generateToken(user.id) };
};

export default { register, login };
import fs from 'node:fs';
import path from 'node:path';
import { DatabaseSync } from 'node:sqlite';

// Récupère le chemin depuis .env, avec un chemin par défaut
const dbPath = process.env.DB_PATH || 'src/data/app.sqlite3';
const resolvedPath = path.resolve(process.cwd(), dbPath);

// Ensures that the parent directory (e.g., src/data) exists before opening the database
fs.mkdirSync(path.dirname(resolvedPath), { recursive: true });

// Open (or create) the SQLite file
const db = new DatabaseSync(resolvedPath);

// Enables foreign keys and creates the “users” table if it does not exist
db.exec(`
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    nom TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('parent', 'enseignant', 'direction')),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`);

export default db;
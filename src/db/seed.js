import 'dotenv/config';
import bcrypt from 'bcrypt';
import db from './database.js';

// Number of salt rounds for bcrypt password hashing
const SALT_ROUNDS = 10;

// Default test accounts covering all application roles
const initialUsers = [
  {
    email: 'direction@ecole.be',
    password: 'Password123',
    nom: 'Claire Lefèvre',
    role: 'direction',
  },
  {
    email: 'enseignant@ecole.be',
    password: 'Password123',
    nom: 'Marc Dubois',
    role: 'enseignant',
  },
  {
    email: 'parent@ecole.be',
    password: 'Password123',
    nom: 'Sophie Laurent',
    role: 'parent',
  },
];

// Hash passwords and insert initial users into the database
async function seedUsers() {
  const insertStmt = db.prepare(`
    INSERT INTO users (email, password_hash, nom, role)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(email) DO NOTHING
  `);

  for (const user of initialUsers) {
    const passwordHash = await bcrypt.hash(user.password, SALT_ROUNDS);
    insertStmt.run(user.email, passwordHash, user.nom, user.role);
  }

  console.log('Database initialized with test users.');
}

// Run the seed script and exit with an error code on failure
seedUsers().catch((err) => {
  console.error('Error during database initialization:', err.message);
  process.exit(1);
});
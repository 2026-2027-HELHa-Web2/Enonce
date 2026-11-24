import bcrypt from 'bcrypt';

class User {
  constructor({ id, nom, email, password, role = 'parent', createdAt }) {
    this.id = id;
    this.nom = nom;
    this.email = email;
    this.password = password;
    this.role = role;
    this.createdAt = createdAt;
  }

  async hashPassword() {
    if (this.password && !this.password.startsWith('$2')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  }

  async comparePassword(candidate) {
    return bcrypt.compare(candidate, this.password);
  }

  toJSON() {
    const { password, ...rest } = this;
    return rest;
  }
}

export default User;
import * as bcrypt from 'bcrypt';

export async function comparePasswords(password: string, hash: string) {
  return await bcrypt.compare(password, hash);
}

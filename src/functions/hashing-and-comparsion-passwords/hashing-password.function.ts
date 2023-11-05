import * as bcrypt from 'bcrypt';

export async function hashingPassword(password: string) {
  const saltOrRounds = 20;

  return await bcrypt.hash(password, saltOrRounds);
}

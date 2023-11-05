import * as bcrypt from 'bcrypt';

export async function hashingPassword(password: string) {
  return await bcrypt.hash(
    password,
    parseInt(process.env.BCRYPT_SALT_OR_ROUNDS),
  );
}

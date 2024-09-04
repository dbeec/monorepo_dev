import * as bcrypt from "bcrypt";

const saltRounds: number = 10;
export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(saltRounds)
  const hashedPassword = await bcrypt.hash(password, salt)
  return hashedPassword;
}
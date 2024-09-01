import * as bcrypt from "bcrypt";

const saltRounds: number = 10;
export async function hashPassword(password: string) {
  try {
    const salt = await bcrypt.genSalt(saltRounds)
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword;
  } catch (error) {
    console.error("Error hashing password: ", error)
    throw error;
  }
}
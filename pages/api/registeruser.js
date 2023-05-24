import {connectToDatabase} from "@/helpers/db";
import {hashPassword} from "@/helpers/hashPassword";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const {email, password} = data;
  if (email.trim().length === 0 || !email.includes("@")) {
    res.status(422).json({message: "you must add correct data before submitting"});
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();
  const encryptedPassword = await hashPassword(password);
  const result = await db.collection("users").insertOne({
    email: email,
    password: encryptedPassword
  });
  res.status(201).json({message: "user created  & inserted to the database"});
}
export default handler;

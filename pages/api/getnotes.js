import {connectToDatabase} from "@/helpers/db";

async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const client = await connectToDatabase();
  const db = client.db();
  const result = db.collection("note-app").find({});
  res.status(201).json({message: "found notes", result});
}
export default handler;

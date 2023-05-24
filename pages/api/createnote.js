import {connectToDatabase} from "@/helpers/db";

async function handler(req, res) {
  if (req.method !== "POST") {
    return;
  }
  const data = req.body;
  const {title, body, timestamp} = data;
  if (title.trim().length === 0 || body.trim().length === 0) {
    res.status(422).json({message: "you must add data before submitting"});
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();
  const result = await db.collection("notes").insertOne({
    title: title,
    body: body,
    time: timestamp
  });
  res.status(201).json({message: "note inserted to the database"});
}
export default handler;

import {MongoClient} from "mongodb";

export async function connectToDatabase() {
  const userName = process.env.DBUSERNAME;
  const passowrd = process.env.DBPASSWORD;
  const client = await MongoClient.connect(
    `mongodb+srv://${userName}:${passowrd}@cluster0.haibje0.mongodb.net/note-app?retryWrites=true&w=majority`
  );
  return client;
}

import {MongoClient} from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://abdulsamadlaghari1:RlpO6Z3cMeY60YN9@cluster0.haibje0.mongodb.net/note-app?retryWrites=true&w=majority"
  );
  return client;
}

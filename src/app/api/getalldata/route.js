import { MongoClient } from 'mongodb';
import {NextResponse} from "next/server";

export const GET = async (request) => {
  const client = new MongoClient(process.env.MONGO);

  try {
    await client.connect();
    const database = client.db('traffic_rules'); // Choose a name for your database
    const collection = database.collection('visparigi_noteikumi'); // Choose a name for your collection
    const allData = await collection.find({}).toArray();

    return NextResponse.json(allData);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }

}


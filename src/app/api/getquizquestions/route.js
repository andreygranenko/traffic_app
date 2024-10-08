import { MongoClient } from 'mongodb';
import {NextResponse} from "next/server";

export const GET = async (request) => {
  const client = new MongoClient(process.env.MONGO);

  const { searchParams } = new URL(request.url);
  try {
    await client.connect();
    const database = client.db('quiz');
    const collectionName = searchParams.get('collection') || 'traffic_rules_groups';

    const collection = database.collection(collectionName);
    const allData = await collection.find({}).toArray();

    const response = NextResponse.json(allData, {
      headers: {
        'Access-Control-Allow-Origin': 'https://www.eksamen.tech',
      }
    });

    return response;
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }

}


import { MongoClient } from 'mongodb';
import {NextResponse} from "next/server";

export const GET = async (request) => {
  const client = new MongoClient(process.env.MONGO);

  try {
    await client.connect();
    const { searchParams } = new URL(request.url);
    const collectionName = searchParams.get('collection') || '1';
    const database = client.db('traffic_rules_scrap');
    const collection = database.collection(collectionName);
    const allData = await collection.find({}).sort({number: 1}).toArray();

    return NextResponse.json(allData);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  } finally {
    await client.close();
  }

}


import { MongoClient } from 'mongodb';
import {NextResponse} from "next/server";
export const dynamic = 'force-dynamic';
export const GET = async (request) => {
  const client = new MongoClient(process.env.MONGO);

  try {
    await client.connect();
    const { searchParams } = new URL(request.url);
    const collectionName = searchParams.get('collection') || 'first_group';
    const signNum = parseInt(searchParams.get('number'));
    const database = client.db('traffic_signs');
    const collection = database.collection(collectionName);

    const allData = await collection.find({sign_num: signNum}).toArray();

    return NextResponse.json(allData);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  } finally {
    await client.close();
  }

}


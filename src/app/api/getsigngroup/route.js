import { MongoClient } from 'mongodb';
import {NextResponse} from "next/server";

export const GET = async (request) => {
  const client = new MongoClient(process.env.MONGO);

  try {
    await client.connect();
    const { searchParams } = new URL(request.url);

    const collectionName = searchParams.get('collection') || 'traffic_rules_groups';
    const page = parseInt(searchParams.get('page'), 10) || 1;
    const limit = parseInt(searchParams.get('limit'), 10) || 10;

    const database = client.db('traffic_signs');
    const collection = database.collection(collectionName);

    const totalItems = await collection.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);
    const offset = (page - 1) * limit;

    const allData = await collection.find({})
      .sort({sign_num: 1})
      .skip(offset)
      .limit(limit)
      .toArray();

    return NextResponse.json({ signs: allData, total: totalItems, totalPages });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  } finally {
    await client.close();
  }

}


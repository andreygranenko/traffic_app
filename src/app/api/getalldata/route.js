import clientPromise from "@/lib/mongoConnect";
import {NextResponse} from "next/server";

export const GET = async (request) => {
  const client = await clientPromise;

  try {
    const database = client.db('traffic_rules');
    const collection = database.collection('traffic_rules_groups');
    const allData = await collection
      .find({})
      .sort({number: 1})
      .toArray();

    return NextResponse.json(allData);
  } catch (error) {
    console.log(error);
  } finally {
    await client.close();
  }

}


import clientPromise from '../../../util/mongodb';

export async function GET(req) {
    const client = await clientPromise;
    const db = client.db('biddibot');
    const tournaments = await db.collection('tournaments').find({}).toArray();

    return new Response(JSON.stringify(tournaments), {
        headers: { 'Content-Type': 'application/json' },
    });
}
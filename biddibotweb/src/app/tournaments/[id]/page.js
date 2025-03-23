import clientPromise from '../../../util/mongodb';

export async function generateStaticParams() {
    const client = await clientPromise;
    const db = client.db('biddibot');
    const tournaments = await db.collection('tournaments').find({}).toArray();

    return tournaments.map(tournament => ({
        id: tournament.id.toString(),
    }));
}

export default async function TournamentPage({ params }) {
    const client = await clientPromise;
    const db = client.db('biddibot');
    const tournament = await db.collection('tournaments').findOne({ id: parseInt(params.id) });

    if (!tournament) {
        return <h1>Tournament not found</h1>;
    }

    return (
        <div>
            <h1>{tournament.name}</h1>
            <p>Format: {tournament.format}</p>
            <p>Type: {tournament.type}</p>
            <h3>Participants</h3>
            <ul>
                {tournament.participants.length > 0 ? (
                    tournament.participants.map((p, index) => (
                        <li key={index}>{p.discordname}: {p.username}</li>
                    ))
                ) : (
                    <p>No participants yet!</p>
                )}
            </ul>
        </div>
    );
}
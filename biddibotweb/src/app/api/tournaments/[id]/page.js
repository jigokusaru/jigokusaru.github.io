import clientPromise from '../../../../../util/mongodb';

export default async function TournamentPage({ params }) {
    const client = await clientPromise; // Connect to MongoDB
    const db = client.db('biddibot');

    // Fetch the specific tournament using the ID from the URL
    const tournament = await db.collection('tournaments').findOne({ id: parseInt(params.id) });

    // Handle case where the tournament is not found
    if (!tournament) {
        return (
            <div>
                <h1>Tournament not found</h1>
                <p>No tournament exists with ID {params.id} in the database.</p>
            </div>
        );
    }

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>{tournament.name}</h1>
            <p>Format: {tournament.format}</p>
            <p>Type: {tournament.type}</p>
            <h3>Participants</h3>
            <ul>
                {tournament.participants.length > 0 ? (
                    tournament.participants.map((participant, index) => (
                        <li key={index}>
                            {participant.discordname}: {participant.username}
                        </li>
                    ))
                ) : (
                    <p>No participants yet!</p>
                )}
            </ul>
        </div>
    );
}
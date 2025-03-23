// Import React and Next.js types
import React from 'react';

// Define a simple React component with TypeScript
export default function HomePage() {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to BiddiBot’s Tournament Website!</h1>
            <p>This is where you’ll manage and view your tournaments.</p>
            <button
                style={{
                    padding: '10px 20px',
                    backgroundColor: 'purple',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
                onClick={() => alert('This button does nothing for now!')}
            >
                Click Me
            </button>
        </div>
    );
}